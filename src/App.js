import React from 'react'
// import { start, bid, close } from "../../../cardano/plutus/contract"
import { Tab, Tabs, RadioGroup, Radio, FormGroup, InputGroup, NumericInput } from "@blueprintjs/core";
import "../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import "../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css";
import "../node_modules/normalize.css/normalize.css";
import
Cardano
  from "./cardano/serialization-lib/index"
import { contractAddress } from "./cardano/market-contract/validator";
import { set_error } from "./store/error/errorActions";
import { resolveError } from "./utils/resolver";
import {
  assetsToValue,
  fromAscii,
  fromHex,
  getSellOffer,
  lovelacePercentage,
  toBytesNum,
  toHex,
  fromBech32
} from "./utils/converter";
import { createEvent, createDatum } from "./utils/factory";
import {
  createTxUnspentOutput,
  serializeTxUnspentOutput,
  valueToAssets,
} from "./cardano/transaction";
import Wallet from "./cardano/wallet/index"
import { getLockedUtxos, getAssetDetails, getTxMetadata, getLockedUtxosByAsset } from "./cardano/blockfrost-api"
import { deserializeSale, serializeSale } from "./cardano/market-contract/datums"
import { purchaseAsset,listAsset } from "./cardano/market-contract/index"
import { blake2b } from "blakejs";
import { WALLET_STATE, MARKET_TYPE } from "./store/wallet/walletTypes";
import {
  walletConnected,
  setWalletLoading,
  setWalletData,
} from "./store/wallet/walletActions";
import { getWalletAssets } from "./store/wallet/api"
import { getAssets } from "./database/assets"
let Buffer = require('buffer/').Buffer
let blake = require('blakejs')

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTabId: "1",
      whichWalletSelected: "nami",
      walletFound: false,
      walletIsEnabled: false,
      walletName: undefined,
      walletIcon: undefined,
      walletAPIVersion: undefined,

      networkId: undefined,
      Utxos: undefined,
      CollatUtxos: undefined,
      balance: undefined,
      balanceValue: undefined,
      multiAssets: undefined,
      changeAddress: undefined,
      rewardAddress: undefined,
      usedAddress: undefined,

      txBody: undefined,
      txBodyCborHex_unsigned: "",
      txBodyCborHex_signed: "",
      submittedTxHash: "",

      addressBech32SendADA: "addr_test1qrc6fdexcnkmt9xau0e7yv9yaxyscd06klcme4nvj9c8d2gw9vs4u5282ymd67uf666yd6qldlmhn703qgt6lxcwk0qs7mps3y",
      lovelaceToSend: 3000000,
      assetNameHex: "646967697261636b",
      assetPolicyIdHex: "a89c237e2ef5ca2a6dde7ba62f6f06c1b4afb24cd55a7a1a048da342",
      assetAmountToSend: 1,
      addressScriptBech32: "addr_test1wrv8lazht78mcvru0eu7rf7a6w0hjl3a77g2kd9f48em80qqutwpv",
      datumStr: "12345678",
      plutusScriptCborHex: "5918e001000033233223322323233322233223332223322332232333222323332223233333333222222223233322232333322223232332232323332223232332233223232333332222233223322332233223322332222323223232232325335303233300a3333573466e1cd55cea80424000466446609a00400264646464646666ae68cdc39aab9d5004480008cccc8888cccc16801000c008004dd71aba15004375a6ae85400cdd71aba15002375c6ae84d5d1280111a82d9a982e19ab9c491035054310005d49926135744a00226ae8940044d55cf280089baa00135742a01066a0500a86ae84d5d1280411a82a9a982b19ab9c4910350543100057499263333573466e1d40112002205323333573466e1d40152000230533055357426aae79401c8d4158d4c15ccd5ce2481035054310005849926498cccd5cd19b8735573aa004900011980699191919191919191919191999ab9a3370e6aae75402920002333333333301b335029232323333573466e1cd55cea8012400046604260726ae854008c0b8d5d09aba250022350653530663357389201035054310006749926135573ca00226ea8004d5d0a80519a8148151aba150093335503075ca05e6ae854020ccd540c1d728179aba1500733502904235742a00c66a05266aa0a6096eb4d5d0a8029919191999ab9a3370e6aae754009200023350233232323333573466e1cd55cea80124000466a05666a082eb4d5d0a80118231aba135744a00446a0d26a60d466ae712401035054310006b49926135573ca00226ea8004d5d0a8011919191999ab9a3370e6aae7540092000233502933504175a6ae854008c118d5d09aba2500223506935306a3357389201035054310006b49926135573ca00226ea8004d5d09aba250022350653530663357389201035054310006749926135573ca00226ea8004d5d0a80219a814bae35742a00666a05266aa0a6eb88004d5d0a801181c1aba135744a00446a0c26a60c466ae71241035054310006349926135744a00226ae8940044d5d1280089aba25001135744a00226ae8940044d5d1280089aba25001135573ca00226ea8004d5d0a8011919191999ab9a3370ea002900311810181d1aba135573ca00646666ae68cdc3a801240084603e60886ae84d55cf280211999ab9a3370ea00690011180f98179aba135573ca00a46666ae68cdc3a80224000460446eb8d5d09aab9e500623505c35305d3357389201035054310005e49926499264984d55cea80089baa001357426ae8940088d4154d4c158cd5ce2490350543100057499261056135054353055335738920103505435000564984d55cf280089baa001135573aa00226ea80044d55cf280089baa0012212330010030022001222222222212333333333300100b00a00900800700600500400300220012212330010030022001122123300100300212001122123300100300212001122123300100300212001212222300400521222230030052122223002005212222300100520011232230023758002640026aa07c446666aae7c004940388cd4034c010d5d080118019aba200203d23232323333573466e1cd55cea801a4000466600e6464646666ae68cdc39aab9d5002480008cc034c0b8d5d0a80119a8098151aba135744a00446a0806a608266ae71241035054310004249926135573ca00226ea8004d5d0a801999aa805bae500a35742a00466a01eeb8d5d09aba2500223503c35303d335738921035054310003e49926135744a00226aae7940044dd50009110919980080200180110009109198008018011000899aa800bae75a224464460046eac004c8004d540e088c8cccd55cf80112804919a80419aa81598031aab9d5002300535573ca00460086ae8800c0e04d5d08008891001091091198008020018900089119191999ab9a3370ea002900011a81598029aba135573ca00646666ae68cdc3a801240044a05646a0666a606866ae7124010350543100035499264984d55cea80089baa001232323333573466e1cd55cea8012400046600c600e6ae854008dd69aba135744a00446a0606a606266ae71241035054310003249926135573ca00226ea80048848cc00400c00880048c8cccd5cd19b8735573aa002900011bae357426aae7940088d40b0d4c0b4cd5ce2481035054310002e499261375400224464646666ae68cdc3a800a40084a00e46666ae68cdc3a8012400446a014600c6ae84d55cf280211999ab9a3370ea00690001280511a8179a981819ab9c490103505431000314992649926135573aa00226ea8004484888c00c0104488800844888004480048c8cccd5cd19b8750014800880188cccd5cd19b8750024800080188d409cd4c0a0cd5ce2490350543100029499264984d55ce9baa0011220021220012001232323232323333573466e1d4005200c200b23333573466e1d4009200a200d23333573466e1d400d200823300b375c6ae854014dd69aba135744a00a46666ae68cdc3a8022400c46601a6eb8d5d0a8039bae357426ae89401c8cccd5cd19b875005480108cc048c050d5d0a8049bae357426ae8940248cccd5cd19b875006480088c050c054d5d09aab9e500b23333573466e1d401d2000230133016357426aae7940308d40b0d4c0b4cd5ce2481035054310002e49926499264992649926135573aa00826aae79400c4d55cf280109aab9e500113754002424444444600e01044244444446600c012010424444444600a010244444440082444444400644244444446600401201044244444446600201201040024646464646666ae68cdc3a800a400446660106eb4d5d0a8021bad35742a0066eb4d5d09aba2500323333573466e1d400920002300a300b357426aae7940188d4074d4c078cd5ce249035054310001f499264984d55cea80189aba25001135573ca00226ea80048488c00800c888488ccc00401401000c80048c8c8cccd5cd19b875001480088c018dd71aba135573ca00646666ae68cdc3a80124000460106eb8d5d09aab9e500423501735301833573892010350543100019499264984d55cea80089baa001212230020032122300100320011122232323333573466e1cd55cea80124000466aa010600c6ae854008c014d5d09aba25002235014353015335738921035054310001649926135573ca00226ea8004448848cc00400c0084480048848cc00400c008800448488c00800c448800448004888848cccc00401401000c00880044880088488c00400c80048c8c8cccd5cd19b8735573aa004900011991198058010009bae35742a0046eb4d5d09aba250022350053530063357389201035054310000749926135573ca00226ea80044984800480048848cc00400c0088004448c8c00400488cc00cc008008004c8c8cc88c8cc88ccc888ccc888ccc888cc88cc88ccc888cc88cc88c8cc88c8cc88cc88cc88c8c8cc88cc88c8ccc888c8c8c8c8c8c8cccc8888c8cc88c8c8c8c8c8c8c8c8c8c8c8c8ccc888c8c8c8c8c8c8c8cccccccc88888888ccccc88888cccc8888cc88cc88cc88cc88cc88c8c8c8c8c8c8c88c8c888c8c8c8c8c8cc13ccc04524011177726f6e6720696e7075742076616c7565003335037503f33550583355503900e0105335350683502e12233355032225335305453353507333355503d013014002210571055133004002001100100132353017001222222222200a5007130631622153353506a001100222130671653353506f303200a2135305f00122333503b503e500b3030333503d03f482024bd0040044ccd40e140ed4020c0b5208092f40153353034007153353506f303200a2135305f001223305233045330144911a73656c6c65722773207369676e6174757265206d697373696e67005004330144911962757965722773207369676e6174757265206d697373696e6700335505b300f50083500e3530610032200233052330144901236578706563746564206869676865737420627579657220746f2067657420746f6b656e00335505b3007002333503b503e500b3030482024bd004cc0512412765787065637465642073656c6c657220746f206765742068696768657374206275796f6666657200335505b30073036500c303000113304f330114911a73656c6c65722773207369676e6174757265206d697373696e67005001330114911c65787065637465642073656c6c657220746f2067657420746f6b656e0033550583004303350093335038503b5008302d482024bd00484d4c17c00488cc148cc051240111627579206f6666657220746f6f206c6f770032333573466e20008004154158d4c17403488d4c184008888800ccc148cc0512411277726f6e67206f757470757420646174756d0033052333503a2253353055333573466e3cd4c1840088888010d4c184004888801015c15854cd4c154ccd5cd19b8735306100222220033530610012222003057056153353055333573466e3cd4c1840088888008d4c184004888800815c1584ccd5cd19b8f3530610022222001353061001222200105705610561056105630345005500c333503a22533535074002215335350750022153353057333573466e3cd4c19400888008d4c194004880081641604ccd5cd19b8735306500222001353065001220010590581058105715335350740012105710573035500535074003330144911277726f6e67206f75747075742076616c756500333503a504230113535506e500622002333503b503e500b3030333503d03f482024bd0040044cd5415cc02d4010d4028c0c8c0c00244d4d541a540048800454cd4d4194d4c03c00c88d4c04c00888888888894cd4d41e14cccd4c0a402c8541e88541e88541e884ccd54c15448005405c8d4c1bc004894cd4c1754cd4c174ccd5cd19b8f3530850100222002353085010042200205f05e1333573466e1cd4c2140400888004d4c214040108800417c17841784d41f800c541f402c84d4c1b800488d4c1c8004888ccd54c1504800488d4c1dc008888d4c2040402088d4c20c04014894cd4c1a0cccc11c01000c0080044cd420404024020402141e403c4d421804d4c21004cd5ce249024c6600085014984c158588854cd4d419c00454cd4d41b8c038008854cd4d41bcc8d4c05400488888888894cd4d41e8ccd54c1584800540608d4d541dc004894cd4c178ccd5cd19b8f00200f06005f13507f0031507e002213507d35355077001220011507b5005232323215335350733333333574800846666ae68cdc39aab9d5004480008cccd55cfa8021283b91999aab9f500425078233335573e6ae89401494cd4d41e14cd4d41e0c8c8c8c8c8c8ccccccd5d200311999ab9a3370e6aae7540192000233335573ea00c4a1040246666aae7d40189420c048cccd55cfa803128420091999aab9f50062508501233335573e6ae89401c94cd4d4214054cd4d4214054cd4d4214054cd4d421404c150d5d0a805909a84400911199983b8020018010008a8430090a99a9a84300982a1aba1500b2135089013002001150870115086012153353508601305535742a014426a1120260040022a10e022a10c0242a66a6a10c0260aa6ae85402484d422404c0080045421c0454218049421804244042400423c042380423404942040526250800125080012508001250800108b01135744a00226ae8940044d5d1280089aab9e5001137540026ae85401c84d41ec8cc198008004541e4854cd4d41e4c8c8c8c8ccccccd5d200211999ab9a3370ea004900011999aab9f50042508101233335573e6ae89401494cd4d420404c8c8c8c8ccccccd5d200211999ab9a3370e6aae7540112000233335573ea0084a1120246666aae7d401094228048cccd55cf9aba25005253353508a0153353508a01305935742a00e426a11a024660f80040022a1160242a66a6a1160260b26ae85401c84d423804c00800454230045422c049422c04258042540425004942200526250870125087012508701250870109201135744a00226aae7940044dd50009aba1500621350840135084010011508201250820108d0108c0123333573466e1d400d2002233335573ea00a46a10602a104024a1040211a024a102029324c4a0fe4a0fe4a0fe4a0fe1140226aae7540084d55cf280089baa00135742a00e426a0f860040022a0f42a0f24a0f21080210602104024a0ec931283a9283a9283a9283a840009099aa83880400089a83f2481136572726f72206465636f64696e67206461746100135744a00226aae7940044dd500089a83d24810f646174756d206e6f7420666f756e640013507949011177726f6e67206f7574707574207479706500221305a162233350352235306d0022235306f00322333303300400300200132353065001222003353505f5335350663502c122333550302253353052333503950413010002005133004002001100100132353015001222222222200950051305e162215335350680011350620022213062162001323306d307600353353506e0012135071307430770011506f506e135300d001220021333222335064335506700333506433550670020015065506532353055001222200250013235305500122220015001480084c0a00044800488d4c02800888888888894cd4d41bcccd54c12c48005403494cd4c144ccd5cd19b8f00c001053052135072001150710032105310511335048225335350640022100310015063235305900122200223530580012220012353055001220012253353041001104313357380040844424660020060044002444444444424666666666600201601401201000e00c00a00800600440022442466002006004240022442466002006004240022442466002006004240022424446006008224440042244400224002424444600800a424444600600a424444600400a424444600200a4002424444444600e01044244444446600c012010424444444600a01024444444008244444440064424444444660040120104424444444660020120104002466a07a66aa0809110033503d335504048900001503e503e12335001503c503d222232335304b0052335304c004253353028333573466e3c0080040a80a45400c40a480a48cd4c13001080a494cd4c0a0ccd5cd19b8f00200102a0291500310291533535044003215335350450022133530490022335304a0022335304e0022335304f002233027002001202c2335304f002202c23302700200122202c222335304c004202c2225335302d333573466e1c01800c0bc0b854cd4c0b4ccd5cd19b8700500202f02e13302a004001102e102e10271533535044001210271027112232001320013550502253353503c0011003221330060023004001235302a00122002235302900122001235302a00122220041220022122300100320011200112001111222300330020011200112233553011120012353550330012233550360023355301412001235355036001223355039002333535501300123300a4800000488cc02c0080048cc028005200000133007002001223370000400246666666ae90004940d4940d4940d48d40d8dd68011281a82011999999aba400125034250342503425034235035375c00407e244666aa601c240026a02ca02246a6aa05e00244666aa6022240026a032a02846a6aa06400244666a6aa01e00246602e9000000911980c00100091980b800a4000002660060040024466aa60182400246a6aa05c0024466aa062004666a6aa016002466aa60202400246a6aa0640024466aa06a0046aa02400200244666aaa010026004002466aa60202400246a6aa0640024466aa06a0046aa020002002666aaa00601c004002222444666aa600e24002a05666aa60182400246a6aa05c0024466aa0620046aa01c002666aa600e24002446a6aa05e00444a66a602c666aa6022240026466a03844666a6a018006440040040026a6a0140024400266a01401002e46a6aa064002446601400400a00c2006266a05e008006a05800266aa60182400246a6aa05c002446466aa064006600200a640026aa08644a66a6a05e00226aa01c0064426a6aa06800444a66a603666018004010266aa02600e0022600c00600444a66a602000420242002244246600200600424002640026aa0724422444a66a6a05000220044426600a004666aa600e2400200a00800222424446006008224424446600400a00822424446002008224002640026aa068442244a66a6a0440022a04844266a04a600800466aa600c24002008002640026aa0664422444a66a6a04400226a6a01c00644002442666a6a02000a440046008004666aa600e2400200a00800244666ae68cdc780100080400391199ab9a3370e00400200e00c266a01200200844a66a60060042002200824400424400240022466a00644666a6a00c006440040040026a6a008002440022442466002006004240022442466002006004240022244600400246a0449212665787065637465642065786163746c79206f6e6520636f6e74696e75696e67206f75747075740022123300100300220012222123333001005004003002200122123300100300220012612123001002120012350184912165787065637465642065786163746c79206f6e652073637269707420696e70757400221233001003002200122212333001004003002200111220021221223300100400312001112212330010030021120012212330010030022001121223002003112200112001212230020032221223330010050040032001212230020032122300100320012212330010030022001123500435300233573800200693090009000893089191800800911980198010010009",
      transactionIdLocked: "fd8cbf087bf9641145f0d30d68610124a05e80b952472e26a190fbc5be89b1da",
      transactionIndxLocked: 0,
      lovelaceLocked: 3000000,
      manualFee: 1480000,
      aSellPrice: 10000000,
      saleDetails: undefined,
      datumHash: undefined,
      asset: undefined,
      validAssets: []

    }

    /**
     * When the wallet is connect it returns the connector which is
     * written to this API variable and all the other operations
     * run using this API object
     */
    this.API = undefined;

    /**
     * Protocol parameters
     * @type {{
     * keyDeposit: string,
     * coinsPerUtxoWord: string,
     * minUtxo: string,
     * poolDeposit: string,
     * maxTxSize: number,
     * priceMem: number,
     * maxValSize: number,
     * linearFee: {minFeeB: string, minFeeA: string}, priceStep: number
     * }}
     */
    this.protocolParams = {
      linearFee: {
        minFeeA: "44",
        minFeeB: "155381",
      },
      minUtxo: "34482",
      poolDeposit: "500000000",
      keyDeposit: "2000000",
      maxValSize: 5000,
      maxTxSize: 16384,
      priceMem: 0.0577,
      priceStep: 0.0000721,
      coinsPerUtxoWord: "34482",
    }
    this.DATUM_TYPE = {
      SellOffer: 0,
      BuyOffer: 1,
      Close: 2,
    };


  }

  /**
   * Handles the tab selection on the user form
   * @param tabId
   */
  handleTabId = (tabId) => this.setState({ selectedTabId: tabId })

  /**
   * Handles the radio buttons on the form that
   * let the user choose which wallet to work with
   * @param obj
   */
  handleWalletSelect = (obj) => {
    const whichWalletSelected = obj.target.value
    this.setState({ whichWalletSelected },
      () => {
        this.refreshData()
      })
  }

  /**
   * Generate address from the plutus contract cborhex
   */
  generateScriptAddress = () => {
    // cborhex of the alwayssucceeds.plutus
    // const cborhex = "4e4d01000033222220051200120011";
    // const cbor = Buffer.from(cborhex, "hex");
    // const blake2bhash = blake.blake2b(cbor, 0, 28);

    const script = Cardano.Instance.PlutusScript.from_bytes(Buffer.from(this.state.plutusScriptCborHex, "hex"))
    // const blake2bhash = blake.blake2b(script.to_bytes(), 0, 28);
    const blake2bhash = "67f33146617a5e61936081db3b2117cbf59bd2123748f58ac9678656";
    const scripthash = Cardano.Instance.ScriptHash.from_bytes(Buffer.from(blake2bhash, "hex"));

    const cred = Cardano.Instance.StakeCredential.from_scripthash(scripthash);
    const networkId = Cardano.Instance.NetworkInfo.testnet().network_id();
    const baseAddr = Cardano.Instance.EnterpriseAddress.new(networkId, cred);
    const addr = baseAddr.to_address();
    const addrBech32 = addr.to_bech32();

    // hash of the address generated from script
    console.log(Buffer.from(addr.to_bytes(), "utf8").toString("hex"))

    // hash of the address generated using cardano-cli
    const ScriptAddress = Cardano.Instance.Address.from_bech32("addr_test1wpnlxv2xv9a9ucvnvzqakwepzl9ltx7jzgm53av2e9ncv4sysemm8");
    console.log(Buffer.from(ScriptAddress.to_bytes(), "utf8").toString("hex"))


    console.log(ScriptAddress.to_bech32())
    console.log(addrBech32)

  }

  /**
   * Checks if the wallet is running in the browser
   * Does this for Nami, CCvault and Flint wallets
   * @returns {boolean}
   */

  checkIfWalletFound = () => {
    let walletFound = false;

    const wallet = this.state.whichWalletSelected;
    if (wallet === "nami") {
      walletFound = !!window?.cardano?.nami
    } else if (wallet === "ccvault") {
      walletFound = !!window?.cardano?.ccvault
    } else if (wallet === "flint") {
      walletFound = !!window?.cardano?.flint
    }

    this.setState({ walletFound })
    return walletFound;
  }

  /**
   * Checks if a connection has been established with
   * the wallet
   * @returns {Promise<boolean>}
   */
  checkIfWalletEnabled = async () => {

    let walletIsEnabled = false;

    try {
      const wallet = this.state.whichWalletSelected;
      if (wallet === "nami") {
        walletIsEnabled = await window.cardano.nami.isEnabled();
      } else if (wallet === "ccvault") {
        walletIsEnabled = await window.cardano.ccvault.isEnabled();
      } else if (wallet === "flint") {
        walletIsEnabled = await window.cardano.flint.isEnabled();
      }

      this.setState({ walletIsEnabled })

    } catch (err) {
      console.log(err)
    }

    return walletIsEnabled
  }

  /**
   * Enables the wallet that was chosen by the user
   * When this executes the user should get a window pop-up
   * from the wallet asking to approve the connection
   * of this app to the wallet
   * @returns {Promise<void>}
   */

  enableWallet = async () => {
    try {

      const wallet = this.state.whichWalletSelected;
      if (wallet === "nami") {
        this.API = await window.cardano.nami.enable();
      } else if (wallet === "ccvault") {
        this.API = await window.cardano.ccvault.enable();
      } else if (wallet === "flint") {
        this.API = await window.cardano.flint.enable();
      }

      await this.checkIfWalletEnabled();
      await this.getNetworkId();

    } catch (err) {
      console.log(err)
    }
  }

  /**
   * Get the API version used by the wallets
   * writes the value to state
   * @returns {*}
   */
  getAPIVersion = () => {

    let walletAPIVersion;

    const wallet = this.state.whichWalletSelected;
    if (wallet === "nami") {
      walletAPIVersion = window?.cardano?.nami.apiVersion
    } else if (wallet === "ccvault") {
      walletAPIVersion = window?.cardano?.ccvault.apiVersion;
    } else if (wallet === "flint") {
      walletAPIVersion = window?.cardano?.flint.apiVersion;
    }

    this.setState({ walletAPIVersion })
    return walletAPIVersion;
  }

  /**
   * Get the name of the wallet (nami, ccvault, flint)
   * and store the name in the state
   * @returns {*}
   */

  getWalletName = () => {

    let walletName;

    const wallet = this.state.whichWalletSelected;
    if (wallet === "nami") {
      walletName = window?.cardano?.nami.name
    } else if (wallet === "ccvault") {
      walletName = window?.cardano?.ccvault.name
    } else if (wallet === "flint") {
      walletName = window?.cardano?.flint.name
    }

    this.setState({ walletName })
    return walletName;
  }

  /**
   * Gets the Network ID to which the wallet is connected
   * 0 = testnet
   * 1 = mainnet
   * Then writes either 0 or 1 to state
   * @returns {Promise<void>}
   */
  getNetworkId = async () => {
    try {
      const networkId = await this.API.getNetworkId();
      this.setState({ networkId })

    } catch (err) {
      console.log(err)
    }
  }

  /**
   * Gets the UTXOs from the user's wallet and then
   * stores in an object in the state
   * @returns {Promise<void>}
   */

  getUtxos = async () => {

    let Utxos = [];

    try {
      const rawUtxos = await this.API.getUtxos();
      console.log(rawUtxos)

      for (const rawUtxo of rawUtxos) {
        const utxo = Cardano.Instance.TransactionUnspentOutput.from_bytes(
          fromHex(rawUtxo)
        )
        console.log(utxo)
        const input = utxo.input();
        const txid = Buffer.from(input.transaction_id().to_bytes(), "utf8").toString("hex");
        const txindx = input.index();
        const output = utxo.output();
        const amount = output.amount().coin().to_str(); // ADA amount in lovelace
        const multiasset = output.amount().multiasset();
        console.log(multiasset);
        let multiAssetStr = "";

        if (multiasset) {
          const keys = multiasset.keys() // policy Ids of thee multiasset
          const N = keys.len();
          // console.log(`${N} Multiassets in the UTXO`)


          for (let i = 0; i < N; i++) {
            const policyId = keys.get(i);
            const policyIdHex = Buffer.from(policyId.to_bytes(), "utf8").toString("hex");
            // console.log(`policyId: ${policyIdHex}`)
            const assets = multiasset.get(policyId)

            const assetNames = assets.keys();
            const K = assetNames.len()
            // console.log(`${K} Assets in the Multiasset`)

            for (let j = 0; j < K; j++) {
              const assetName = assetNames.get(j);
              // console.log(assets.get(assetName));
              // console.log(assetName);
              const assetNameString = Buffer.from(assetName.name(), "utf8").toString();
              // console.log(assetNameString)
              // console.log(assets.get(assetName).to_str());
              const assetNameHex = Buffer.from(assetName.name(), "utf8").toString("hex")
              const multiassetAmt = assets.get(assetName)
              multiAssetStr += `+ ${multiassetAmt.to_str()} + ${policyIdHex}.${assetNameHex} (${assetNameString})`
              // console.log(assetNameString)
              // console.log(`Asset Name: ${assetNameHex}`)
            }
          }
        }


        const obj = {
          txid: txid,
          txindx: txindx,
          amount: amount,
          str: `${txid} #${txindx} = ${amount}`,
          multiAssetStr: multiAssetStr,
          TransactionUnspentOutput: utxo
        }
        Utxos.push(obj);
        // console.log(`utxo: ${str}`)
      }
      this.setState({ Utxos })
    } catch (err) {
      console.log(err)
    }
  }

  /**
   * The collateral is need for working with Plutus Scripts
   * Essentially you need to provide collateral to pay for fees if the
   * script execution fails after the script has been validated...
   * this should be an uncommon occurrence and would suggest the smart contract
   * would have been incorrectly written.
   * The amount of collateral to use is set in the wallet
   * @returns {Promise<void>}
   */
  getCollateral = async () => {

    let CollatUtxos = [];

    try {

      let collateral = [];

      const wallet = this.state.whichWalletSelected;
      if (wallet === "nami") {
        collateral = await this.API.experimental.getCollateral();
      } else {
        collateral = await this.API.getCollateral();
      }

      for (const x of collateral) {
        const utxo = Cardano.Instance.TransactionUnspentOutput.from_bytes(Buffer.from(x, "hex"));
        CollatUtxos.push(utxo)
        // console.log(utxo)
      }
      this.setState({ CollatUtxos })
    } catch (err) {
      console.log(err)
    }

  }

  /**
   * Gets the current balance of in Lovelace in the user's wallet
   * This doesnt resturn the amounts of all other Tokens
   * For other tokens you need to look into the full UTXO list
   * @returns {Promise<void>}
   */
  getBalance = async () => {
    try {
      const balanceCBORHex = await this.API.getBalance();
      const balanceValue = Cardano.Instance.Value.from_bytes(Buffer.from(balanceCBORHex, "hex")).coin()
      const balance = Cardano.Instance.Value.from_bytes(Buffer.from(balanceCBORHex, "hex")).coin().to_str();
      const multiAssets = Cardano.Instance.Value.from_bytes(Buffer.from(balanceCBORHex, "hex")).multiasset()
      console.log(multiAssets)
      this.setState({ balance, multiAssets, balanceValue })

    } catch (err) {
      console.log(err)
    }
  }

  /**
   * Get the address from the wallet into which any spare UTXO should be sent
   * as change when building transactions.
   * @returns {Promise<void>}
   */
  getChangeAddress = async () => {
    try {
      const raw = await this.API.getChangeAddress();
      const changeAddress = Cardano.Instance.Address.from_bytes(Buffer.from(raw, "hex")).to_bech32()
      this.setState({ changeAddress })
    } catch (err) {
      console.log(err)
    }
  }

  /**
   * This is the Staking address into which rewards from staking get paid into
   * @returns {Promise<void>}
   */
  getRewardAddresses = async () => {

    try {
      const raw = await this.API.getRewardAddresses();
      const rawFirst = raw[0];
      const rewardAddress = Cardano.Instance.Address.from_bytes(Buffer.from(rawFirst, "hex")).to_bech32()
      // console.log(rewardAddress)
      this.setState({ rewardAddress })

    } catch (err) {
      console.log(err)
    }
  }

  /**
   * Gets previsouly used addresses
   * @returns {Promise<void>}
   */
  getUsedAddresses = async () => {

    try {
      const raw = await this.API.getUsedAddresses();
      const rawFirst = raw[0];
      const usedAddress = Cardano.Instance.Address.from_bytes(Buffer.from(rawFirst, "hex")).to_bech32()
      // console.log(rewardAddress)
      this.setState({ usedAddress })

    } catch (err) {
      console.log(err)
    }
  }

  /**
   * Refresh all the data from the user's wallet
   * @returns {Promise<void>}
   */
  refreshData = async () => {

    // this.generateScriptAddress()

    try {
      const walletFound = this.checkIfWalletFound();
      if (walletFound) {
        await this.enableWallet();
        await this.getAPIVersion();
        await this.getWalletName();
        await this.getUtxos();
        await this.getCollateral();
        await this.getBalance();
        await this.getChangeAddress();
        await this.getRewardAddresses();
        await this.getUsedAddresses();
        await Wallet.getAvailableWallets()
        const listed = await getLockedUtxos('addr_test1wpupz00jfglpk2547x03s2mptq779w9u7fr92ha0x8g5kxq7pgcf2', {})
        console.log(listed)
        const index = 13
        const asset = listed[index]['amount']['1']['unit']
       // console.log(asset);
        const assetDetails = await getAssetDetails(asset)
       // console.log(assetDetails);
        const txhash0 = listed[index]['tx_hash']
        console.log(txhash0);
        const txmetadata = await getTxMetadata(txhash0)
        console.log(txmetadata);
        const datumHash = listed[index]['data_hash']
        console.log(datumHash);
        //const datumhash0=await Cardano.Instance.ScriptDataHash.from_bytes(fromHex(datumhashraw0)).free()
        // console.log(datumhash0);
        const saleDetails = txmetadata["0"]["json_metadata"]
        //console.log(saleDetails);
        const datumSale = serializeSale(saleDetails)
        //console.log(datumSale);
        const verifyDetails = deserializeSale(datumSale)
        console.log(verifyDetails);
        console.log(assetDetails['policyId']);
        console.log(assetDetails['assetName']);
        const walletAssets = await getWalletAssets()
        //console.log(walletAssets);
        const assets = (await getAssets(walletAssets)).reduce((map, asset) => {
          map[asset.details.asset] = asset;
          return map;
        }, {});
        //console.log(assets);
        let validAssets = []
        for (const key in assets) {
          if (Object.hasOwnProperty.call(assets, key)) {
            validAssets.push(assets[key])


          }
        }
        console.log(validAssets);
        // console.log(assets.valueOf());
        this.setState({
          saleDetails, datumHash, asset, assetPolicyIdHex: assetDetails['policyId'], assetNameHex: assetDetails['assetName'], validAssets
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  /**
   * Every transaction starts with initializing the
   * TransactionBuilder and setting the protocol parameters
   * This is boilerplate
   * @returns {Promise<TransactionBuilder>}
   */
  initTransactionBuilder = async () => {

    const txBuilder = null;
    // const txBuilder = TransactionBuilder.new(
    //     TransactionBuilderConfigBuilder.new()
    //         .fee_algo(LinearFee.new(BigNum.from_str(this.protocolParams.linearFee.minFeeA), BigNum.from_str(this.protocolParams.linearFee.minFeeB)))
    //         .pool_deposit(BigNum.from_str(this.protocolParams.poolDeposit))
    //         .key_deposit(BigNum.from_str(this.protocolParams.keyDeposit))
    //         .coins_per_utxo_word(BigNum.from_str(this.protocolParams.coinsPerUtxoWord))
    //         .max_value_size(this.protocolParams.maxValSize)
    //         .max_tx_size(this.protocolParams.maxTxSize)
    //         .prefer_pure_change(true)
    //         .build()
    // );

    return txBuilder
  }

  /**
   * Builds an object with all the UTXOs from the user's wallet
   * @returns {Promise<Cardano.Instance.TransactionUnspentOutputs>}
   */
  getTxUnspentOutputs = async () => {
    let txOutputs = Cardano.Instance.TransactionUnspentOutputs.new()
    for (const utxo of this.state.Utxos) {
      txOutputs.add(utxo.TransactionUnspentOutput)
    }
    return txOutputs
  }

  async componentDidMount() {
    await Cardano.load()
    await this.refreshData();
  }

  render() {

    return (
      <div style={{ margin: "20px" }}>



        <h1>Boilerplate DApp connector to Wallet</h1>
        <div style={{ paddingTop: "10px" }}>
          <RadioGroup
            label="Select Wallet:"
            onChange={this.handleWalletSelect}
            selectedValue={this.state.whichWalletSelected}
            inline={true}
          >
            <Radio label="Nami" value="nami" />
            <Radio label="CCvault" value="ccvault" />
            <Radio label="Flint" value="flint" />
          </RadioGroup>
        </div>



        <button style={{ padding: "20px" }} onClick={this.refreshData}>Refresh</button>

        <p style={{ paddingTop: "20px" }}><span style={{ fontWeight: "bold" }}>Wallet Found: </span>{`${this.state.walletFound}`}</p>
        <p><span style={{ fontWeight: "bold" }}>Wallet Connected: </span>{`${this.state.walletIsEnabled}`}</p>
        <p><span style={{ fontWeight: "bold" }}>Wallet API version: </span>{this.state.walletAPIVersion}</p>
        <p><span style={{ fontWeight: "bold" }}>Wallet name: </span>{this.state.walletName}</p>

        <p><span style={{ fontWeight: "bold" }}>Network Id (0 = testnet; 1 = mainnet): </span>{this.state.networkId}</p>
        <p style={{ paddingTop: "20px" }}><span style={{ fontWeight: "bold" }}>UTXOs: (UTXO #txid = ADA amount + AssetAmount + policyId.AssetName + ...): </span>{this.state.Utxos?.map(x => <li style={{ fontSize: "10px" }} key={`${x.str}${x.multiAssetStr}`}>{`${x.str}${x.multiAssetStr}`}</li>)}</p>
        <p style={{ paddingTop: "20px" }}><span style={{ fontWeight: "bold" }}>Balance: </span>{this.state.balance}</p>
        <p><span style={{ fontWeight: "bold" }}>Change Address: </span>{this.state.changeAddress}</p>
        <p><span style={{ fontWeight: "bold" }}>Staking Address: </span>{this.state.rewardAddress}</p>
        <p><span style={{ fontWeight: "bold" }}>Used Address: </span>{this.state.usedAddress}</p>
        <hr style={{ marginTop: "40px", marginBottom: "40px" }} />

        <Tabs id="TabsExample" vertical={true} onChange={this.handleTabId} selectedTabId={this.state.selectedTabId}>
          <Tab id="1" title="My assets" panel={
            <div style={{ marginLeft: "20px" }}>



            </div>
          } />
          <Tab id="2" title="2. Send Token to Address" panel={
            <div style={{ marginLeft: "20px" }}>

              <FormGroup
                helperText="insert an address where you want to send some ADA ..."
                label="Address where to send ADA"
              >
                <InputGroup
                  disabled={false}
                  leftIcon="id-number"
                  onChange={(event) => this.setState({ addressBech32SendADA: event.target.value })}
                  value={this.state.addressBech32SendADA}

                />
              </FormGroup>
              <FormGroup
                helperText="Make sure you have enough of Asset in your wallet ..."
                label="Amount of Assets to Send"
                labelFor="asset-amount-input"
              >
                <NumericInput
                  id="asset-amount-input"
                  disabled={false}
                  leftIcon={"variable"}
                  allowNumericCharactersOnly={true}
                  value={this.state.assetAmountToSend}
                  min={1}
                  stepSize={1}
                  majorStepSize={1}
                  onValueChange={(event) => this.setState({ assetAmountToSend: event })}
                />
              </FormGroup>
              <FormGroup
                helperText="Hex of the Policy Id"
                label="Asset PolicyId"
              >
                <InputGroup
                  disabled={false}
                  leftIcon="id-number"
                  onChange={(event) => this.setState({ assetPolicyIdHex: event.target.value })}
                  value={this.state.assetPolicyIdHex}

                />
              </FormGroup>
              <FormGroup
                helperText="Hex of the Asset Name"
                label="Asset Name"
              >
                <InputGroup
                  disabled={false}
                  leftIcon="id-number"
                  onChange={(event) => this.setState({ assetNameHex: event.target.value })}
                  value={this.state.assetNameHex}

                />
              </FormGroup>

              <button style={{ padding: "10px" }} onClick={this.buildSendTokenTransaction}>Run</button>
            </div>
          } />
          <Tab id="3" title="3. Send ADA to Plutus Script" panel={
            <div style={{ marginLeft: "20px" }}>
              <FormGroup
                helperText="insert a Script address where you want to send some ADA ..."
                label="Script Address where to send ADA"
              >
                <InputGroup
                  disabled={false}
                  leftIcon="id-number"
                  onChange={(event) => this.setState({ addressScriptBech32: event.target.value })}
                  value={this.state.addressScriptBech32}

                />
              </FormGroup>
              <FormGroup
                helperText="Adjust Order Amount ..."
                label="Lovelaces (1 000 000 lovelaces = 1 ADA)"
                labelFor="order-amount-input2"
              >
                <NumericInput
                  id="order-amount-input2"
                  disabled={false}
                  leftIcon={"variable"}
                  allowNumericCharactersOnly={true}
                  value={this.state.lovelaceToSend}
                  min={1000000}
                  stepSize={1000000}
                  majorStepSize={1000000}
                  onValueChange={(event) => this.setState({ lovelaceToSend: event })}
                />
              </FormGroup>
              <FormGroup
                helperText="insert a Datum ..."
                label="Datum that locks the ADA at the script address ..."
              >
                <InputGroup
                  disabled={false}
                  leftIcon="id-number"
                  onChange={(event) => this.setState({ datumStr: event.target.value })}
                  value={this.state.datumStr}

                />
              </FormGroup>
              <button style={{ padding: "10px" }} onClick={this.buildSendAdaToPlutusScript}>Run</button>
            </div>
          } />
          <Tab id="4" title="4. Send (Sell) Token to Plutus Script" panel={
            <div style={{ marginLeft: "20px" }}>
              <FormGroup
                helperText="Script address where ADA is locked ..."
                label="Script Address"
              >
                <InputGroup
                  disabled={false}
                  leftIcon="id-number"
                  onChange={(event) => this.setState({ addressScriptBech32: event.target.value })}
                  value={this.state.addressScriptBech32}

                />
              </FormGroup>
              <FormGroup
                helperText="Need to send ADA with Tokens ..."
                label="Lovelaces (1 000 000 lovelaces = 1 ADA)"
                labelFor="order-amount-input2"
              >
                <NumericInput
                  id="order-amount-input2"
                  disabled={false}
                  leftIcon={"variable"}
                  allowNumericCharactersOnly={true}
                  value={this.state.lovelaceToSend}
                  min={1000000}
                  stepSize={1000000}
                  majorStepSize={1000000}
                  onValueChange={(event) => this.setState({ lovelaceToSend: event })}
                />
              </FormGroup>
              <FormGroup
                helperText="Make sure you have enough of Asset in your wallet ..."
                label="Amount of Assets to Send"
                labelFor="asset-amount-input"
              >
                <NumericInput
                  id="asset-amount-input"
                  disabled={false}
                  leftIcon={"variable"}
                  allowNumericCharactersOnly={true}
                  value={this.state.assetAmountToSend}
                  min={1}
                  stepSize={1}
                  majorStepSize={1}
                  onValueChange={(event) => this.setState({ assetAmountToSend: event })}
                />
              </FormGroup>
              <FormGroup
                helperText="Hex of the Policy Id"
                label="Asset PolicyId"
              >
                <InputGroup
                  disabled={false}
                  leftIcon="id-number"
                  onChange={(event) => this.setState({ assetPolicyIdHex: event.target.value })}
                  value={this.state.assetPolicyIdHex}

                />
              </FormGroup>
              <FormGroup
                helperText="Hex of the Asset Name"
                label="Asset Name"
              >
                <InputGroup
                  disabled={false}
                  leftIcon="id-number"
                  onChange={(event) => this.setState({ assetNameHex: event.target.value })}
                  value={this.state.assetNameHex}

                />
              </FormGroup>
              <FormGroup
                helperText="insert a Datum ..."
                label="Datum that locks the ADA at the script address ..."
              >
                <InputGroup
                  disabled={false}
                  leftIcon="id-number"
                  onChange={(event) => this.setState({ datumStr: event.target.value })}
                  value={this.state.datumStr}

                />
              </FormGroup>
              <button style={{ padding: "10px" }} onClick={async () => {
                const shelleyChangeAddress = Cardano.Instance.Address.from_bech32(this.state.changeAddress)
                const sellerBaseAddress = Cardano.Instance.BaseAddress.from_address(shelleyChangeAddress)
                const wallet = {
                  data: { address: this.state.changeAddress }
                }

                const asset = this.state.validAssets[3]
                //console.log(asset);

                try {
                  await Wallet.getAvailableWallets()
                  // const collectionDetails = await getCollection(asset.details.policyId);
                  const walletUtxos = await Wallet.getUtxos();

                  const royaltiesAddress = wallet.data.address;
                  const royaltiesPercentage = 0;
                  const price =10;

                  const datum = createDatum(
                    asset.details.assetName,
                    asset.details.policyId,
                    wallet.data.address,
                    royaltiesAddress,
                    royaltiesPercentage,
                    price
                  );
                  console.log(datum);

                  const contractVersion = process.env.REACT_APP_MARTIFY_CONTRACT_VERSION;

                  const listObj = await listAsset(
                    datum,
                    {
                      address: fromBech32(wallet.data.address),
                      utxos: walletUtxos,
                    },
                    contractVersion
                  );

                  if (listObj && listObj.datumHash && listObj.txHash) {
                    console.log({ success: true, type: MARKET_TYPE.NEW_LISTING });
                  } else {
                    console.log({ success: false });
                  }
                } catch (error) {
                  console.error(
                    `Unexpected error in listToken. [Message: ${error.message}]`
                  );
                  console.log({ success: false });

                }

              }



              }>Run</button>
            </div>
          } />
          <Tab id="6" title="6. Redeem Tokens (buy) from Plutus Script" panel={
            <div style={{ marginLeft: "20px" }}>
              <FormGroup
                helperText="Script address where ADA is locked ..."
                label="Script Address"
              >
                <InputGroup
                  disabled={false}
                  leftIcon="id-number"
                  onChange={(event) => this.setState({ addressScriptBech32: event.target.value })}
                  value={this.state.addressScriptBech32}

                />
              </FormGroup>
              <FormGroup
                helperText="content of the plutus script encoded as CborHex ..."
                label="Plutus Script CborHex"
              >
                <InputGroup
                  disabled={false}
                  leftIcon="id-number"
                  onChange={(event) => this.setState({ plutusScriptCborHex: event.target.value })}
                  value={this.state.plutusScriptCborHex}

                />
              </FormGroup>
              <FormGroup
                helperText="Transaction hash ... If empty then run n. 3 first to lock some ADA"
                label="UTXO where ADA is locked"
              >
                <InputGroup
                  disabled={false}
                  leftIcon="id-number"
                  onChange={(event) => this.setState({ transactionIdLocked: event.target.value })}
                  value={this.state.transactionIdLocked}

                />
              </FormGroup>
              <FormGroup
                helperText="UTXO IndexId#, usually it's 0 ..."
                label="Transaction Index #"
                labelFor="order-amount-input2"
              >
                <NumericInput
                  id="order-amount-input2"
                  disabled={false}
                  leftIcon={"variable"}
                  allowNumericCharactersOnly={true}
                  value={this.state.transactionIndxLocked}
                  min={0}
                  stepSize={1}
                  majorStepSize={1}
                  onValueChange={(event) => this.setState({ transactionIndxLocked: event })}
                />
              </FormGroup>
              <FormGroup
                helperText="Adjust Order Amount ..."
                label="Lovelaces (1 000 000 lovelaces = 1 ADA)"
                labelFor="order-amount-input2"
              >
                <NumericInput
                  id="order-amount-input2"
                  disabled={false}
                  leftIcon={"variable"}
                  allowNumericCharactersOnly={true}
                  value={this.state.lovelaceLocked}
                  min={1000000}
                  stepSize={1000000}
                  majorStepSize={1000000}
                  onValueChange={(event) => this.setState({ lovelaceLocked: event })}
                />
              </FormGroup>
              <FormGroup
                helperText="Make sure you have enough of Asset in your wallet ..."
                label="Amount of Assets to Reedem"
                labelFor="asset-amount-input"
              >
                <NumericInput
                  id="asset-amount-input"
                  disabled={false}
                  leftIcon={"variable"}
                  allowNumericCharactersOnly={true}
                  value={this.state.assetAmountToSend}
                  min={1}
                  stepSize={1}
                  majorStepSize={1}
                  onValueChange={(event) => this.setState({ assetAmountToSend: event })}
                />
              </FormGroup>
              <FormGroup
                helperText="Hex of the Policy Id"
                label="Asset PolicyId"
              >
                <InputGroup
                  disabled={false}
                  leftIcon="id-number"
                  onChange={(event) => this.setState({ assetPolicyIdHex: event.target.value })}
                  value={this.state.assetPolicyIdHex}

                />
              </FormGroup>
              <FormGroup
                helperText="Hex of the Asset Name"
                label="Asset Name"
              >
                <InputGroup
                  disabled={false}
                  leftIcon="id-number"
                  onChange={(event) => this.setState({ assetNameHex: event.target.value })}
                  value={this.state.assetNameHex}

                />
              </FormGroup>
              <FormGroup
                helperText="insert a Datum ..."
                label="Datum that unlocks the ADA at the script address ..."
              >
                <InputGroup
                  disabled={false}
                  leftIcon="id-number"
                  onChange={(event) => this.setState({ datumStr: event.target.value })}
                  value={this.state.datumStr}

                />
              </FormGroup>
              <FormGroup
                helperText="Needs to be enough to execute the contract ..."
                label="Manual Fee"
                labelFor="order-amount-input2"
              >
                <NumericInput
                  id="order-amount-input2"
                  disabled={false}
                  leftIcon={"variable"}
                  allowNumericCharactersOnly={true}
                  value={this.state.manualFee}
                  min={160000}
                  stepSize={100000}
                  majorStepSize={100000}
                  onValueChange={(event) => this.setState({ manualFee: event })}
                />
              </FormGroup>
              {/* <button style={{ padding: "10px" }} onClick={this.buildRedeemTokenFromPlutusScript}>Run</button> */}
              <button style={{ padding: "10px" }} onClick={async () => {
                console.log('press');
                const shelleyChangeAddress = Cardano.Instance.Address.from_bech32(this.state.changeAddress)
                const sellerBaseAddress = Cardano.Instance.BaseAddress.from_address(shelleyChangeAddress)


                const wallet = {
                  data: { address: this.state.changeAddress }
                }
                const asset = { status: { datum: this.state.saleDetails, datumHash: this.state.datumHash, submittedBy: this.state.changeAddress, artistAddress: this.state.changeAddress }, details: { asset: this.state.asset } }

                try {
                  console.log(wallet);
                  console.log(asset);
                  await Wallet.getAvailableWallets()
                  const walletUtxos = await Wallet.getUtxos();
                  const contractVersion = "v3"//resolveContractVersion(asset);
                  console.log(walletUtxos);
                  const assetUtxo = (
                    await getLockedUtxosByAsset(
                      contractAddress(contractVersion).to_bech32(),
                      asset.details.asset
                    )
                  ).find((utxo) => utxo.data_hash === asset.status.datumHash);
                  console.log(assetUtxo);
                  if (assetUtxo) {
                    const txHash = await purchaseAsset(
                      asset.status.datum,
                      {
                        address: fromBech32(wallet.data.address),
                        utxos: walletUtxos,
                      },
                      {
                        seller: fromBech32(asset.status.submittedBy),
                        artist: fromBech32(asset.status.artistAddress),
                        market: fromBech32(process.env.REACT_APP_MARTIFY_ADDRESS),
                      },
                      createTxUnspentOutput(contractAddress(contractVersion), assetUtxo),
                      contractVersion
                    );

                    if (txHash) {

                      const event = createEvent(
                        MARKET_TYPE.PURCHASE,
                        asset.status.datum,
                        txHash,
                        wallet.data.address
                      );



                      console.log({ success: true, type: MARKET_TYPE.PURCHASE, txHash });
                    } else {
                      console.log({ success: false });

                    }
                  } else {
                    console.log({ success: false });
                  }
                } catch (error) {
                  console.error(
                    `Unexpected error in purchaseToken. [Message: ${error.message}]`
                  );
                  console.log({ success: false });

                }

              }
              }>Run</button>
            </div>
          } />
          <Tabs.Expander />
        </Tabs>

        <hr style={{ marginTop: "40px", marginBottom: "40px" }} />

        {/*<p>{`Unsigned txBodyCborHex: ${this.state.txBodyCborHex_unsigned}`}</p>*/}
        {/*<p>{`Signed txBodyCborHex: ${this.state.txBodyCborHex_signed}`}</p>*/}
        <p>{`Submitted Tx Hash: ${this.state.submittedTxHash}`}</p>
        <p>{this.state.submittedTxHash ? 'check your wallet !' : ''}</p>



      </div>
    )
  }
}
