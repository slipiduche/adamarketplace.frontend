import Cardano from "../../cardano/serialization-lib";
import Wallet from "../../cardano/wallet";
import { getAssets } from "../../database/assets";
import { getCollection } from "../../database/collections";
import { getWallet } from "../../database/wallets";
import { WALLET_STATE, MARKET_TYPE } from "./walletTypes";
import {
  walletConnected,
  setWalletLoading,
  setWalletData,
} from "./walletActions";
import { set_error } from "../error/errorActions";
import {
  listAsset,
  updateListing,
  cancelListing,
  purchaseAsset,
} from "../../cardano/market-contract/";
import { contractAddress } from "../../cardano/market-contract/validator";
import {
  createTxUnspentOutput,
  serializeTxUnspentOutput,
  valueToAssets,
} from "../../cardano/transaction";
import { getLockedUtxosByAsset } from "../../cardano/blockfrost-api";
import { collections_add_tokens } from "../collection/collectionActions";
import { fromBech32 } from "../../utils/converter";
import { createEvent, createDatum } from "../../utils/factory";
import { resolveError } from "../../utils/resolver";


export const loadAssets = (wallet, callback) => async (dispatch) => {
  try {
    dispatch(setWalletLoading(WALLET_STATE.GETTING_ASSETS));

    const walletAssets = await getWalletAssets();

    const assets = (await getAssets(walletAssets)).reduce((map, asset) => {
      map[asset.details.asset] = asset;
      return map;
    }, {});

    dispatch(
      setWalletData({
        ...wallet.data,
        assets,
      })
    );

    callback({ success: true });
  } catch (error) {
    console.error(
      `Unexpected error in loadAssets. [Message: ${error.message}]`
    );
    dispatch(setWalletLoading(false));
    callback({ success: false, error });
    dispatch(
      set_error({
        message: resolveError(error.message, "Loading Wallet Assets"),
        detail: error,
      })
    );
  }
};

// const getWalletAddress = async (usedAddresses) => {
//   if (usedAddresses.length > 1) {
//     for (const address of usedAddresses) {
//       if (await walletExists(address)) return address;
//     }
//   }

//   return usedAddresses[0];
// };

export const getWalletAssets = async () => {
  await Wallet.getAvailableWallets();
  const utxos = await Wallet.getUtxos();
  //console.log(utxos);
  const nativeAssets = utxos
    .map((utxo) => serializeTxUnspentOutput(utxo).output())
    .filter((txOut) => txOut.amount().multiasset() !== undefined)
    .map((txOut) => valueToAssets(txOut.amount()))
    .flatMap((assets) =>
      assets
        .filter((asset) => asset.unit !== "lovelace")
        .map((asset) => asset.unit)
    );

  return [...new Set(nativeAssets)];
};

const resolveContractVersion = (asset) => {
  if (asset.status.contractVersion) {
    return asset.status.contractVersion;
  }
  return "v1";
};
