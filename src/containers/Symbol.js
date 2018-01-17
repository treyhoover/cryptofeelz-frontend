import React from "react";
import { connect } from "react-redux";
import Autocomplete from "react-autocomplete";
import { Div } from "reactyons";
import { getCoin } from "~/redux/coin/selectors"
import { setSymbol } from "~/redux/coin/actionCreators"

const ALL_SYMBOLS = ["BTC","ETH","XRP","BCH","ADA","LTC","NEO","XEM","XLM","IOT","DASH","EOS","XMR","TRX","BTG","ETC","ICX","QTUM","LSK","XRB","USDT","OMG","ARDR","ZEC","STRAT","PPT","VEN","BNB","BCN","XVG","SC","SNT","IGNIS","STEEM","KCS","MAGE","BTS","ZRX","DOGE","DRGN","WAVES","REP","ETN","VERI","SALT","KMD","DGB","SMART","QASH","GNT","DCR","GAS","ARK","VET","RHOC","DCN","PIVX","WTC","WAX","ETHOS","LRC","BAT","HSR","GBYTE","ZCL","KNC","AION","FUN","NEBL","NXS","FCT","DENT","MONA","AE","DGD","REQ","MAID","GXS","XP","POWR","SUB","SYS","KIN","RDD","NXT","BTM","ELF","XZC","GAME","BNT","ENG","MED","BTX2","QSP","ST","PART","PAY","CNX","CVC","NAS","BTCD","XPA","GNO","ICN","LINK","EMC","SKY","RDN","COB","PLR","XDN","PAC","NAV","PPP","BCO","DEW","BLOCK","SRN","VTC","R","EDG","BIX","SAN","RLC","POE","STORJ","DTR","UBQ","XBY","AST","BQX","ENJ","DBC","808","RPX","QRL","MCO","TNB","ACT","APPC","INS","STORM","ANT","SPANK","UTK","LEND","WABI","PPC","VEE","OST","RCN","ZEN","VIBE","XCP","SNM","NLG","SNGLS","888","DATA","HST","QLC","ITC","CMT","BAY","ADX","EMC2","MOD","TRIG","ATM","CTR","MANA","FUEL","NGC","LBC","HVN","UKG","VIA","NULS","MGO","CND","PRE","UNITY","ETP","TAU","WGR","BURST","WINGS","DNT","AMB","CAT","PRL","MLN","RISE","EDO","LKK","1ST","AGRS","TNT","CLOAK","MTL","BRD","IOC","THC","XNN","MNX","TRST","PURA","DCT","GRID","AEON","MDS","VOX","SAFEX","XAS","LUN","PRS","NMC","CFI","SHIFT","GTO","MTH","GVT","CDT","TAAS","TKN","XSH","XSPEC","FTC","BITCNY","ECN","LA","SLS","JINN","FLASH","GRS","IXT","XWC","COSS","BLT","CRW","EBST","NSR","HTML5","PEPECASH","VOISE","EVX","DLT","MOON","DAT","SLR","STAR","XEL","DMD","DRT","SNOV","VIB","POT","ORME","ECC","FAIR","PAYX","CMP","DOVU","HMQ","PASC","ONION","INK","AMP","MSP","NLC2","ADT","ION","NYC","NET","YOYOW","DBIX","GUP","BLK","SIB","ARN","WRC","DPY","POLL","300","611","ZSC","MER","DIVX","SNC","EXP","PHR","BCAP","RC","GRC","PPY","RVT","NMR","NEU","TIX","AIR","BNTY","PND","VRC","ERC20","XRL","HUSH","MDA","DIME","BCPT","DNA","CREDO","GOLOS","ALQO","BIS","DBET","ART","BOT","OK","RADS","STX","ATB","OTN","NEOS","RBY","MUE","LIFE","BITB","ALIS","NXC","OXY","OMNI","PKT","HDG","COLX","ELIX","PRG","BLUE","XMY","TGT","KICK","MYB","BMC","BITUSD","POSW","LEO","BQ","DTB","FLO","SEQ","CAG","LINDA","SOAR","XAUR","PTOY","NVST","ENRG","ICOS","SBD","OAX","IFT","HEAT","INCNT","MINT","SPF","BBR","PIRL","AC","BCY","CRED","SWT","ODN","LMC","PBL","FLIXX","LUX","CSNO","NTRN","GBX","XMCC","WCT","PFR","MUSIC","VTA","UNO","CLAM","GCR","ONG","TIPS","TIME","GAM","PHO","XST","QUN","BWK","FLDC","QAU","COVAL","GEO","ABY","LOC","FRST","ZOI","PLU","GCN","XLR","ATMS","IOP","GMT","PST","BSD","TX","MAG","OCT","UFO","BET","RMC","NIO","REC","ARC2","AVT","ECOB","SUMO","ADC","PLBT","INN","ATL","PINK","BDL","OBITS","XVC","MYST","CVCOIN","SEND","UNIT","XPM","XUC","EAC","HGT","DICE","UFR","CURE","MEME","WISH","TZC","PIX","PURE","ESP","FYP","SPHR","BTM2","CRC","XTO","BTDX","REX","PGL","PRO","CRB","USNBT","CRAVE","PLAY","VSX","ASTRO","B2B","OPT","DOT","TCC","HKN","BELA","QWARK","ADST","ZNY","DOPE","SPR","NVC","WILD","AUR","TFL","HYP","SYNX","ITNS","BRK","ALT","VIVO","GLD","BLITZ","VRM","XBC","EDR","CANN","PTC","BPL","SNRG","RIC","MTNC","DRP","BON","ZER","PZM","SPRTS","IND","KORE","ETT","HBT","STA","HWC","PRIX","DAI","TOA","CHC","2GIVE","CARBON","NOTE","VTR","BRX","RKC","PDC","CREA","RUP","BUZZ","SCL","DGPT","SXC","EXCL","SSS","BTCZ","IXC","FOR","REAL","TRUST","EBTC","TKS","ERO","SWIFT","EQT","XGOX","PROC","FRD","ERC","ELLA","WAND","BBT","TRC","CDX","START","NOBL","AHT","MBRS","PUT","KLC","VSL","FUNK","XFT","PING","GOOD","INXT","ZRC","ZEIT","KRB","EGC","XMG","CBX","APX","DYN","ELTCOIN","EMV","SMART2","QVT","ETBS","ADL","EFYT","CHIPS","ZEPH","STU","QRK","BASH","RAIN","GRE","EFL","ANC","MXT","B3","HAL","HUC","PKB","ITT","LINX","HOLD","DNR","MONK","BTCS","FLT","XLC","UNIFY","MCAP","YOC","BLU","FLIK","CNT","V","DFT","ARC","WDC","DP","NDC","ECASH","GIM","POP","RIYA","INPAY","MEC","RNS","PBT","BTA","CTX","ADZ","BRO","INSN","CMPCO","JET","STAK","HAT","ECA","MOIN","MAC","DCY","DAR","YASH","FJC","EPY","FYN","XCPO","SCORE","CRM","LDOGE","JNS","VIDZ","NET2","CFT","FIMK","CDN","KLN","DSR","XCN","RUSTBITS","INFX","STN","MZC","BYC","ETG","ALTCOM","ABJ","OCL","IFLT","UIS","ORB","LGD","KEK","NKA","ZET","CCRB","UNB","FST","PIPL","MBI","METAL","SIFT","SMC","SAGA","HTC","TES","XBTC21","DFS","ELE","AU","AMS","ICOO","CORG","DGC","ZENI","FC2","NETKO","GRWI","XCXT","LOG","ROC","MCRN","TKR","STRC","TRCT","NUKO","ITI","ATS","MRT","SKIN","MNE","FUCK","BBP","TRI","BTCR","CPC","UTC","I0C","Q2C","LNK","BUN","DEM","TROLL","BPC","XPD","DAXX","BTB","XIOS","SDC","ATOM","BRIT","BTCRED","ACE","HODL","LOT","TTC","IETH","SMLY","XPTX","EBET","USC","KURT","PIGGY","CFD","CCO","AIB","GAIA","BITS","HBN","CV2","KOBO","EL","ARI","OTX","TRK","PASL","POS","MAX","TRUMP","VLT","HPC","FCN","WHL","NYAN","BUCKS","WGO","XBL","ENT","VISIO","ACC","CUBE","ZCG","GUN","GRIM","STS","SUPER","LANA","DRXNE","PR","POST","TIT","UNI","CCT","NEWB","WTT","ITZ","SIGT","SGR","AMMO","GB","BLAS","STARS","RBT","UNY","4CHN","XHI","RED","AMBER","MOJO","OPAL","XGR","XJO","PAK","PHS","BITZ","PXC","BXT","BCF","BLOCKPAY","FUNC","SLG","CJ","ARG","MNM","HERO","CCN","CRX","C2","MRJA","ETHD","CHAN","TGC","JIN","KED","RMC2","ONX","UNIC","WYV","FNC","MNC","PCOIN","SONG","8BIT","TSE","HNC","CNO","KUSH","XPY","BLZ","XRA","GLC","RLT","TAG","LTB","DDF","EUC","OS76","BTQ","EVIL","EGAS","SWING","IMS","CON","CHESS","PX","BTWTY","QTL","LCP","VAL","EOT","XCT","DIX","BTSR","ICN2","COAL","ZUR","KAYI","CYP","DUO","XRE","RBIES","BERN","EBCH","BLC","BIGUP","SDRN","MARS","ZZC","BTPL","FLY","SPACE","PXI","DLC","SRC","VUC","YTN","MUT","BOLI","SOON","EMD","BRAT","GAP","CNNC","SCRT","MAR","UNITS","NTO","TALK","GRT","BSTY","NTWK","BITSILVER","HXX","LBTC","KIC","TRDT","VOT","BAS","WAY","MOTO","CASH","DALC","J","MAO","ARCO","KRONE","HONEY","CAT2","BRIA","STV","ISL","MAD","EVO","RPC","SH","SLING","MTLMC3","SPEX","CXT","GPL","SOIL","CACH","EAGLE","DRS","BITGOLD","MST","GPU","BUMBA","SHDW","ERY","VEC2","XVP","ICOB","BTG2","ICE","XCO","BENJI","CPN","YAC","VC","ARB","BLN","FRC","XNG","FUZZ","SKC","GLT","FIRE","TEK","HMP","ATX","XCRE","SAC","RUPX","NRO","QCN","REE","GP","MAY","NEVA","ALL","ECO","PRX","LEA","BSTAR","WMC","PLACO","ACP","ACOIN","LTCU","BIP","JS","ZMC","CAGE","SFC","GCC","OFF","PONZI","E4ROW","EREAL","IMX","FLAX","LUNA","WARP","SLM","CTO","GTC","GEERT","SLEVIN","WORM","BOST","USDE","SPT","ANTI","TAJ","COXST","EXN","ASAFE2","XBTS","AERM","DBTC","TOR","G3N","URO","VPRC","PIE","FRK","BNX","MSCN","UET","TOKEN","ROOFS","BOAT","SOCC","WBB","RBX","CTIC3","XCS","ICON","TYCHO","VRS","URC","PULSE","BITEUR","CWXT","MILO","WOMEN","CF","VLTC","PRC","DES","DOLLAR","BLRY","BRAIN","BVC","FRN","STEPS","ARGUS","RIDE","ADCN","DRM","DIBC","LTCR","VIP","ZYD","LIR","FXE","MND","BSC","DLISK","MTM","CRT","ELS","IMPS","EGO","CRDNC","GBC","PEX","ZNE","FLVR","TAGR","BQC","TSTR","DAS","HVCO","BIOS","FRAZ","CESC","ORLY","JOBS","MGM","PLNC","CRTM","AGLC","RSGP","XOC","NDAO","VOLT","KNC2","ALTC","IBANK","SLFI","CAB","SDP","BIOB","MRNG","CTIC2","CREVA","SCS","LVPS","XRC","NODC","ULA","P7C","SANDG","GSR","REV","EBT","HMC","CONX","BBC","DGCS","ABN","DMB","CALC","FAL","APW"];

class Symbol extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: props.symbol,
    };
  }

  get symbols() {
    const { input } = this.state;

    return ALL_SYMBOLS.filter(s => s.startsWith(input));
  }

  handleFocus = e => {
    e.target.select();
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleSelect = symbol => {
    this.setState({ input: symbol });

    this.props.setSymbol(symbol);
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      const selected = this.durations[0];

      this.setState({ input: selected });

      this.props.setSymbol(selected);
    }
  };

  render() {
    const { input } = this.state;

    return (
      <Autocomplete
        getItemValue={x => x}
        items={this.symbols}
        renderInput={props => (
          <input
            {...props}
            className="mh2 w3 ph2 tc"
            onFocus={this.handleFocus}
            onKeyPress={this.handleKeyPress}
          />
        )}
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
