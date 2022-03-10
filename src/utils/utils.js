import Cardano from "../cardano/serialization-lib/index"
import { Buffer } from "buffer";
// import {
//   BigNum,
//   PlutusData,
// } from "./custom_modules/@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib";
export const fromHex = (hex) => Buffer.from(hex, "hex");
export const toHex = (bytes) => Buffer.from(bytes).toString("hex");
export const toBytesNum = (num) =>
    num
        .toString()
        .split("")
        .map((d) => "3" + d)
        .join("");
export const fromAscii = (hex) => Buffer.from(hex).toString("hex");

export const assetsToValue = (assets) => {
    const multiAsset = Cardano.MultiAsset.new();
    const lovelace = assets.find((asset) => asset.unit === "lovelace");
    const policies = [
        ...new Set(
            assets
                .filter((asset) => asset.unit !== "lovelace")
                .map((asset) => asset.unit.slice(0, 56))
        ),
    ];
    policies.forEach((policy) => {
        const policyAssets = assets.filter(
            (asset) => asset.unit.slice(0, 56) === policy
        );
        const assetsValue = Cardano.Assets.new();
        policyAssets.forEach((asset) => {
            assetsValue.insert(
                Cardano.AssetName.new(Buffer.from(asset.unit.slice(56), "hex")),
                Cardano.BigNum.from_str(asset.quantity)
            );
        });
        multiAsset.insert(
            Cardano.ScriptHash.from_bytes(Buffer.from(policy, "hex")),
            assetsValue
        );
    });
    const value = Cardano.Value.new(
        Cardano.BigNum.from_str(lovelace ? lovelace.quantity : "0")
    );
    if (assets.length > 1 || !lovelace) value.set_multiasset(multiAsset);
    return value;
};

export const valueToAssets = (value) => {
    const assets = [];
    assets.push({ unit: "lovelace", quantity: value.coin().to_str() });
    if (value.multiasset()) {
        const multiAssets = value.multiasset().keys();
        for (let j = 0; j < multiAssets.len(); j++) {
            const policy = multiAssets.get(j);
            const policyAssets = value.multiasset().get(policy);
            const assetNames = policyAssets.keys();
            for (let k = 0; k < assetNames.len(); k++) {
                const policyAsset = assetNames.get(k);
                const quantity = policyAssets.get(policyAsset);
                const asset =
                    Buffer.from(policy.to_bytes(), "hex").toString("hex") +
                    Buffer.from(policyAsset.name(), "hex").toString("hex");
                assets.push({
                    unit: asset,
                    quantity: quantity.to_str(),
                });
            }
        }
    }
    return assets;
};

/**
 *
 * @param {Cardano.PlutusData} datum
 */
export const getSellOffer = (datum) => {
    const sellOffer = datum
        .as_constr_plutus_data()
        .data()
        .get(0)
        .as_constr_plutus_data()
        .data();
    return {
        aSeller: Cardano.Ed25519KeyHash.from_bytes(
            sellOffer.get(0).as_bytes()
        ),

        aSellPrice: sellOffer.get(2).as_integer().as_u64(),
        aCurrency: Cardano.Ed25519KeyHash.from_bytes(
            sellOffer.get(0).as_bytes()
        ),
        aToken: Cardano.Ed25519KeyHash.from_bytes(
            sellOffer.get(0).as_bytes()
        ),

    };
};

/**
 *
 * @param {Cardano.BigNum} amount
 * @param {Cardano.BigNum} p
 */
export const lovelacePercentage = (amount, p) => {
    return amount
        .checked_mul(Cardano.BigNum.from_str("10"))
        .checked_div(p);
};