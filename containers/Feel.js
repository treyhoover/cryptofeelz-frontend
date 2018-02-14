import React from "react";
import { connect } from "react-redux";
import { Div, Input } from "reactyons";
// import * as coin from "../constants/coins";
import { fetchFeel, setSymbol, setDays } from "../redux/feel/actionCreators";
import Image from "../components/Image";
import Text from "../components/Text";

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
      <Div name="feel-container" bg-black vh-100 w-100 tc flex flex-column pa4 sans-serif>

        <Text
          f1
          white
          as="h1"
          mb4
          dangerouslySetInnerHTML={{
            __html: feel.captionHtml,
          }}
        />

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

      </Div>
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
