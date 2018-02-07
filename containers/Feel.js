import React from "react";
import { connect } from "react-redux";
import { map } from "lodash";
import * as coin from "../constants/coins";
import { fetchFeel, setSymbol, setDays } from "../redux/feel/actionCreators";
import Image from "../components/Image";
import Input from "../components/Input";
import Ui from "../components/Ui";
import Header from "../components/Header";
import Rect from "../components/Rect";

const daysLabelMap = {
  "1": "24 hours",
  "7": "week",
  "30": "month",
  "365": "year",
};

class FeelContainer extends React.Component {
  handleSymbolSelect = (e, { value }) => {
    if (!!value) {

      this.props.setSymbol(value);
    }
  };

  handlePermalinkClick = e => {
    e.target.select();
  };

  handleCopyPermalink = e => {
    document.getElementById('permalink').select();
    document.execCommand('copy');
  };

  handleDurationClick = e => {
    const { feel } = this.props;

    const days = Number(e.target.name);
    const changed = feel.days !== days;

    if (changed) {
      if (this.id) {
        history.push("/");
      }

      this.props.setDays(days);
    }
  };

  handleRefreshClick = e => {
    this.props.fetchFeel();
  };

  render() {
    const { feel } = this.props;

    return (
      <Ui name="feel-container" bg-black vh-100 w-100 flex flex-column pa4>


        <Header size="lg" white as="h1" mb4>{feel.caption}</Header>


        <Image
          flex-auto
          h-100
          mb4
          src={`https://media1.giphy.com/media/${feel.gif}/200.gif`}
          alt={feel.caption}
          style={{ objectFit: "contain " }}
        />

        <Input
          id="permalink"
          db
          w-100
          readOnly
          value={feel.permalink}
          // action={<Button icon="copy" onClick={this.handleCopyPermalink} />}
          onClick={this.handlePermalinkClick}
        />

        {/*<div>*/}
        {/*<Dropdown*/}
        {/*placeholder="Select coin"*/}
        {/*value={feel.symbol}*/}
        {/*options={coin.options}*/}
        {/*search*/}
        {/*selection*/}
        {/*onChange={this.handleSymbolSelect}*/}
        {/*/>*/}

        {/*<Button*/}
        {/*attached="right"*/}
        {/*primary*/}
        {/*toggle*/}
        {/*icon="refresh"*/}
        {/*onClick={this.handleRefreshClick}*/}
        {/*/>*/}
        {/*</div>*/}

        {/*<Button.Group>*/}
        {/*{map(daysLabelMap, (label, d) => {*/}
        {/*const active = String(feel.days) === d;*/}

        {/*return (*/}
        {/*<Button*/}
        {/*key={d}*/}
        {/*name={d}*/}
        {/*onClick={this.handleDurationClick}*/}
        {/*primary={active}*/}
        {/*>*/}
        {/*{label}*/}
        {/*</Button>*/}
        {/*);*/}
        {/*})}*/}
        {/*</Button.Group>*/}

      </Ui>
    )
  }
}

const mapStateToProps = state => ({
  feel: state.feel,
});

export default connect(mapStateToProps, {
  fetchFeel,
  setDays,
  setSymbol,
})(FeelContainer);
