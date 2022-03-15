// import { doc, getDoc, setDoc } from "firebase/firestore";


// export const walletExists = async (address) => {
//   if (address) {
//     const reference = doc(firestore, "wallets", address);
//     const snapshot = await getDoc(reference);
//     return snapshot.exists();
//   }
//   return false;
// };

/**
 * @param {string} address - address needs to be in bech32 format.
 * @throws COULD_NOT_RETRIEVE_WALLET_FROM_DB
 */
export const getWallet = async (address) => {
  try {
    if (address) {
      // const reference = doc(firestore, "wallets", address);
      // const snapshot = await getDoc(reference);
      // if (snapshot.exists()) {
      //   return snapshot.data();
      // } else {
        const wallet = {
          address,
          assets: {},
          events: [],
          market: {},
          offers: [],
         };
        // await saveWallet(wallet, address);
        return wallet;
      //}
    }
  } catch (error) {
    console.error(`Unexpected error in getWallet. [Message: ${error.message}]`);
    throw new Error("COULD_NOT_RETRIEVE_WALLET_FROM_DB");
  }
};






