import React from "react";
import { connect } from "react-redux";
import Autocomplete from "react-autocomplete";
import { Div } from "reactyons";
import { getCoin } from "~/redux/coin/selectors"
import { setSymbol } from "~/redux/coin/actionCreators"

const ALL_SYMBOLS = ["300", "611", "808", "888", "DTR", "EOS", "SANDG", "QSP", "MONA", "ORME", "PLBT", "SRC", "BLOCKPAY", "POT", "SC", "EREAL", "VIA", "SAC", "ST", "STRAT", "VOISE", "OCL", "ICN", "XLM", "GRWI", "ZCG", "LBC", "PIGGY", "STAR", "ARCO", "CASINO", "CHC", "BTM2", "APX", "LSK", "LOG", "ZNE", "AIR", "YTN", "XNN", "NOBL", "BLITZ", "SOIL", "XCRE", "POP", "SIB", "ZZC", "KAYI", "NEOS", "CACH", "POE", "RIDE", "MNA", "PHO", "XLR", "XPM", "SOCC", "FAL", "PRG", "TRDT", "QTM", "CFI", "COB", "EUR", "NAUT", "QLC", "BON", "UFR", "PBL", "MNX", "ICE", "REC", "XAUR", "CRTM", "EBST", "BUMBA", "DDF", "REX", "ION", "BRAIN", "ASAFE2", "XRE", "MUSIC", "NMR", "WYV", "URO", "MILO", "DNA", "WISH", "CDX", "SLING", "USNBT", "BWK", "WOMEN", "RDD", "EMD", "EMV", "DES", "MANA", "BBC", "PHR", "BITSILVER", "SWT", "XCT", "CAD", "MAX", "PND", "DUO", "MOJO", "BIP", "RSGP", "BNX", "EVIL", "UNIT", "FCT", "EGAS", "NMC", "SAFEX", "EAGLE", "IMX", "DP", "SPK", "ZCL", "CLAM", "CRDNC", "ADX", "XMG", "LCP", "GUP", "LBTC", "LNK", "HUC", "FLAX", "ERC20", "KLC", "PURE", "FRN", "CARBON", "TAG", "DOT", "GXS", "POST", "FRAZ", "CCT", "TRIG", "GLD", "SAGA", "ATS", "ISL", "DAI", "UTC", "IFT", "LDOGE", "VLT", "VERI", "NBT", "DPY", "IND", "POLL", "EQT", "HKN", "HEAT", "EL", "XCXT", "GLT", "VIB", "FNC", "XBC", "ECN", "ZENI", "AIB", "BBT", "FLY", "CAP", "WARP", "PSB", "DIX", "BTPL", "AU", "AGLC", "XBTS", "KNC2", "TRX", "EMC", "TNT", "DAS", "GBC", "PASL", "WHL", "BCY", "ETBS", "PLR", "UNY", "DTB", "WDC", "RDN", "STEPS", "GBYTE", "LIR", "CTO", "ENG", "FST", "SAN", "CRM", "PPP", "GAIA", "ARI", "GRIM", "STS", "CHESS", "OBITS", "CON", "FRC", "CAT", "BIS", "RLC", "VAL", "BT1", "BCF", "CVC", "CDT", "KMD", "AMBER", "ERY", "ARB", "WTT", "PIX", "GTC", "SH", "CASH", "VTC", "BUCKS", "RNS", "SKC", "ELTCOIN", "B2B", "COAL", "STA", "RUP", "BET", "BLN", "PX", "DOVU", "MDA", "BUZZ", "TSE", "ONION", "TKR", "MSCN", "WILD", "HMP", "HXX", "ADT", "MUT", "ADZ", "EFYT", "ARN", "UNI", "C2", "XJO", "ATL", "PROC", "SCRT", "KUSH", "ZEPH", "GAS", "ELLA", "SBD", "BENJI", "MAR", "VET", "LKK", "CRYPT", "CADASTRAL", "BTWTY", "MTNC", "MER", "INXT", "XTO", "DRT", "BSC", "ICN2", "MAC", "BLOCK", "XUC", "SPRTS", "BTB", "INK", "TEK", "UET", "TRK", "POSW", "EMP", "ZMC", "DSR", "MND", "XST", "MYST", "ERO", "ASTRO", "IMS", "REAL", "JIO", "ANC", "BTCZ", "TGT", "SLFI", "COLX", "MAO", "DIVX", "HONEY", "SEQ", "XBTC21", "SEND", "LOT", "ANT", "BAS", "TRC", "BURST", "NYAN", "DVC", "CRT", "PAC", "JIN", "SGR", "CMPCO", "NAS", "GAP", "BTCS", "SNGLS", "TES", "SCORE", "PRS", "MRNG", "CORG", "XCPO", "CND", "UFO", "STAK", "HUSH", "FLIXX", "OCT", "CV2", "BLT", "FYN", "METAL", "ROC", "BYC", "FYP", "HGT", "PAY", "DSH", "ICOB", "ECO", "DASH", "XDG", "CCN", "PFR", "MYB", "ADA", "HOLD", "BTG2", "NEO", "LIFE", "STX", "GAM", "ROOFS", "UNIC", "ITT", "TYCHO", "PPC", "GVT", "MAY", "ICX", "PTC", "TOA", "ENT", "MDS", "LINK", "MCAP", "TRUMP", "POWR", "DBTC", "XZC", "DCY", "RC", "VOLT", "STEEM", "DEM", "CMT", "COVAL", "QAU", "EOT", "DCT", "FIMK", "EBT", "DAXX", "EFL", "KURT", "RHOC", "GPL", "XMCC", "SYNX", "START", "SNM", "HBT", "DYN", "INSN", "BXT", "AE", "EDO", "DOLLAR", "BIX", "MST", "GRS", "DATA", "INFX", "JINN", "RPX", "CTIC2", "RIYA", "BITCNY", "AMB", "EBTC", "OMG", "LA", "LINDA", "HAT", "NAV", "HST", "YYW", "XRC", "BSTY", "GRT", "HERO", "STR", "SONG", "RMC2", "PING", "DMD", "ECC", "BTDX", "CCO", "CURE", "HDG", "FUN", "DGB", "PBT", "XRL", "DBIX", "SHORTY", "CFT", "LVPS", "CWXT", "BITGOLD", "BITEUR", "ZEIT", "Q2C", "BPL", "GB", "KOBO", "USC", "VLTC", "FXE", "XC", "VEN", "XSPEC", "DIBC", "RAIN", "UKG", "R", "NXS", "TAU", "ELF", "WGO", "DALC", "PRO", "IXT", "ETH", "BITZ", "OK", "NRO", "XPY", "ITNS", "MTM", "BTA", "PONZI", "GRC", "PEPECASH", "MOD", "RPC", "DGCS", "JET", "VPRC", "PAK", "GBP", "ETHOS", "DLISK", "CTR", "GUN", "BBP", "PPY", "MXT", "COXST", "XCS", "XMR", "JNS", "OMNI", "ARDR", "XBL", "BCO", "BCAP", "PHS", "ZRX", "MAGE", "ZUR", "ART", "PRE", "PRIX", "HMQ", "BITUSD", "MGM", "NEBL", "IMPS", "VEC2", "HMC", "UNB", "XBY", "TIX", "BLU", "XPA", "KEK", "MCO", "EDR", "KICK", "AEON", "QRK", "CNX", "EXCL", "QTL", "NGC", "GCN", "DMB", "XMY", "VOX", "XVG", "CVCOIN", "STRC", "BIGUP", "HBN", "BLUE", "HTC", "BITB", "V", "MGO", "XGR", "MAID", "CHIPS", "FRK", "BPC", "ACP", "ZOI", "XRB", "DRP", "YAC", "ECA", "VSL", "FOR", "SLR", "STORM", "DCR", "ELS", "DRM", "SALT", "EDG", "OHM", "ATMS", "DAR", "CTX", "USDE", "BTCD", "LOC", "UBQ", "VIVO", "SOON", "VUC", "SLEVIN", "FAIR", "WABI", "ZET", "XIOS", "KIC", "BQX", "CXT", "ALIS", "HSR", "BLAS", "CAG", "TOKEN", "RMC", "MRJA", "PUT", "OPT", "BCN", "CONX", "QRL", "RBY", "SRN", "CRB", "ICON", "ULA", "LUN", "PGL", "THC", "KED", "LMC", "XVC", "UNITS", "FTC", "MBRS", "TIT", "BRO", "EAC", "CRAVE", "BMC", "SUPER", "EMB", "XEM", "VIBE", "EMC2", "MONK", "PAYX", "XRA", "PIRL", "ANTI", "KCS", "UNITY", "GNT", "MLN", "PULSE", "BOST", "NLG", "NVST", "QCN", "VTA", "ZRC", "SPF", "CSNO", "XEL", "CUBE", "AERM", "FUCK", "FCN", "ARK", "LTCR", "PKB", "EVO", "QASH", "FLVR", "FLDC", "DGD", "GPU", "ORLY", "PXI", "VEE", "DGPT", "LANA", "GOOD", "XDN", "PRX", "KRB", "TKN", "FJC", "SOAR", "AGRS", "NODC", "NETKO", "BTSR", "FUZZ", "XGOX", "BTS", "STV", "STU", "HNC", "PLAY", "B3", "SSS", "BRD", "PRC", "CPC", "G3N", "RKC", "FLASH", "HWC", "CAGE", "USD", "AMMO", "SLS", "LEND", "PXC", "NSR", "NEVA", "ENRG", "BVC", "STORJ", "PPT", "INS", "PURA", "BCU", "OXY", "IFLT", "VISIO", "J", "IXC", "KLN", "NDAO", "CNC", "VC", "PIPL", "AUR", "VSX", "ORB", "WTC", "BCPT", "NDC", "SCL", "BIOS", "1ST", "NOTE", "PEX", "RED", "SCS", "2GIVE", "BASH", "DRS", "RUSTBITS", "RBIES", "BRIA", "RRT", "SPACE", "JOBS", "DNT", "XFT", "ONG", "DAT", "IOP", "HAL", "BERN", "COSS", "ARGUS", "YASH", "VIDZ", "HODL", "BCH", "ATCC", "ECOB", "USDT", "OS76", "TZC", "LTB", "TSTR", "MOIN", "TIPS", "NEU", "8BIT", "ALQO", "LRC", "NTRN", "ATX", "RVT", "BTC", "ENJ", "CBX", "RISE", "TAAS", "GSR", "YOC", "BQ", "GCR", "OAX", "MEOW", "FRST", "ARC2", "VTR", "VRC", "BLZ", "UNO", "NTO", "NUKO", "ALL", "BIOB", "PLNC", "BRAT", "XCO", "HTML5", "AHT", "PDC", "ACE", "ESP", "TROLL", "JS", "YOYOW", "ETHD", "DIME", "XNG", "SJCX", "TAJ", "EPY", "XAS", "SWING", "SPT", "MNE", "SMLY", "ARC", "JPY", "NXT", "ITI", "AVT", "SFC", "HPC", "TOR", "SHIFT", "DFT", "WMC", "ADST", "BNB", "PASC", "APW", "TCC", "ETG", "IBANK", "RADS", "HVN", "CREA", "BTM", "AMS", "ITZ", "ATM", "MAG", "BTCR", "GBG", "XPD", "CNO", "IETH", "KIN", "FUNK", "WAY", "LTC", "DBC", "ETN", "FRD", "GEO", "XPTX", "I0C", "RIC", "RUPX", "SMART", "SKIN", "MOON", "MNC", "BRK", "MBI", "DRXNE", "REP", "KORE", "TRUST", "SYS", "VOT", "NVC", "EXP", "INPAY", "BDL", "BUN", "BTCRED", "ZNY", "QVT", "EBET", "VRM", "TTC", "TAGR", "CNT", "ATB", "VIP", "DLT", "GTO", "MRT", "BBR", "UTK", "IFC", "NULS", "CPN", "LUX", "MED", "GLC", "NYC", "LINX", "XRP", "MEC", "REE", "SUMO", "SUB", "GP", "MUE", "URC", "GNO", "XCN", "XLC", "DOPE", "PTOY", "OTX", "WCT", "DLC", "AION", "BLC", "TGC", "CHAN", "CTIC3", "WGR", "TALK", "PLACO", "APPC", "GIM", "FLIK", "ZYD", "DCN", "BELA", "CSC", "IGNIS", "SMOKE", "TRI", "FC2", "PR", "SPANK", "DBET", "PZM", "STARS", "BSTAR", "E4ROW", "REV", "BQC", "ETT", "TX", "CAB", "CESC", "DICE", "ELIX", "GRID", "SNRG", "WAVES", "FLT", "BTQ", "XVP", "NET2", "ONX", "KNC", "RCN", "SDRN", "GBX", "SIGT", "PLU", "BRIT", "FUEL", "ACC", "EGO", "SKY", "WORM", "NANOX", "ADC", "ADCN", "IOT", "CRW", "POS", "LTCU", "STN", "ZER", "MTH", "UNIFY", "EBCH", "WBB", "QUN", "GAME", "NTWK", "HYP", "BAT", "BAY", "MNM", "VRS", "UIS", "ZEC", "ELE", "PST", "CLOAK", "PIE", "MSP", "EXN", "NLC2", "KRONE", "ALTC", "RLT", "GEERT", "JWL", "REQ", "GRE", "MEME", "CLUB", "LEO", "BT2", "MARS", "SPHR", "ALTCOM", "NXC", "BNT", "CYP", "SDP", "EGC", "CRED", "BITS", "SLG", "ERC", "SMART2", "CAT2", "XHI", "TRST", "GOLOS", "NKA", "PIVX", "BOT", "SXC", "BNTY", "GCC", "TRCT", "ETP", "MOTO", "CCRB", "MAD", "SMC", "SPR", "ALT", "WAX", "MTL", "STCN", "CFD", "CF", "ABJ", "SWIFT", "CNNC", "ARG", "BOAT", "ITC", "OPAL", "DNR", "CREVA", "SHDW", "AST", "GMT", "BTX2", "CJ", "ACOIN", "HVCO", "EVX", "MZC", "P7C", "OTN", "INN", "WINGS", "RBX", "020", "EUC", "SIFT", "CRC", "TKS", "FIRE", "XCP", "AMP", "FUNC", "XOC", "ODN", "SNOV", "ETC", "BLRY", "CREDO", "ADL", "NIO", "PART", "DGC", "IOC", "ZEN", "MINT", "CANN", "WAND", "ABY", "TFL", "LEA", "XSH", "MCRN", "OST", "PKT", "LGD", "QSH", "ICOO", "DOGE", "4CHN", "XP", "SPEX", "BSD", "RBT", "ECASH", "CRX", "CDN", "BLK", "CALC", "CMP", "DRGN", "QWARK", "ATOM", "INCNT", "NET", "SDC", "TNB", "DEW", "OFF", "DFS", "BRX", "FLO", "QTUM", "PINK", "AC", "TIME", "XWC", "SLM", "SNC", "ACT", "DENT", "PCOIN", "ICOS", "BOLI", "MTLMC3", "LUNA", "WRC", "NEWB", "ZSC", "ABN", "PRL", "SNT", "BTG"];

class Symbol extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: props.symbol,
    };
  }

  get symbols() {
    const { input } = this.state;

    const matches = ALL_SYMBOLS.filter(s => s.startsWith(input));

    if (matches.length === 1 && matches[0] === input) {
      return ALL_SYMBOLS;
    } else {
      return matches;
    }
  }

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleSelect = symbol => {
    this.setState({ input: symbol });

    this.props.setSymbol(symbol);
  };

  render() {
    const { input } = this.state;

    return (
      <Autocomplete
        getItemValue={x => x}
        items={this.symbols}
        inputProps={{
          className: "mh2 w3 ph2 tc",
        }}
        renderItem={(item, isHighlighted) => {
          const itemProps = {
            "pa1": true,
            black: !isHighlighted,
            white: isHighlighted,
            "bg-white": !isHighlighted,
            "bg-blue": isHighlighted,
          };

          return (
            <div key={item}>
              <Div {...itemProps}>
                {item}
              </Div>
            </div>
          )
        }}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        value={input}
      />
    );
  }
}

const mapStateToProps = state => ({
  symbol: getCoin(state).symbol,
});

export default connect(mapStateToProps, {
  setSymbol,
})(Symbol);
