import React from "react";
import { connect } from "react-redux";
import { Div, Input, A, Button, Ul, Li } from "reactyons";
import Router from "next/router";
import { fetchFeel, setSymbol, setDays } from "../redux/feel/actionCreators";
import Image from "../components/Image";
import Text from "../components/Text";

class FeelContainer extends React.Component {
  handlePermalinkClick = e => {
    e.target.select();
  };

  handleCopyPermalink = e => {
    document.getElementById('permalink').select();
    document.execCommand('copy');
  };

  handleSymbolSelect = (e) => {
    const symbol = e.target.attributes.name.value;

    this.props.setSymbol(symbol);
  };

  handleDurationClick = e => {
    const days = Number(e.target.attributes.name.value);

    this.props.setDays(days);
  };

  handleRefreshClick = e => {
    const { symbol, days } = this.props.feel;

    Router.push({
      pathname: "/",
      query: {
        symbol,
        days,
      },
    });
  };

  render() {
    const { feel, showError } = this.props;

    const error = showError || error;

    return (
      <Div name="feel-container" bg-black min-vh-100 w-100 tc flex flex-column pa4 sans-serif>

        {!error && <Text
          f3
          f2-ns
          f1-l
          white
          as="h1"
          mb4
          dangerouslySetInnerHTML={{
            __html: feel.captionHtml,
          }}
        />}

        {error && <Text
          f3
          f2-ns
          f1-l
          white
          as="h1"
          mb4
        >
          When you break a website...
        </Text>}

        <Image
          flex-auto
          h-100
          mb4
          src={!error ? `https://media1.giphy.com/media/${feel.gif}/200.gif` : "/static/error.gif"}
          alt={feel.caption}
          style={{ objectFit: "contain", maxHeight: "50vh", }}
        />

        <Div name="controls" mb3>
          <Div>
            <Button
              onClick={this.handleRefreshClick}
              pointer
              ph1
              pv2
              w3
              bg-green
              hover-bg-dark-green
              white
              bn
              mb3
            >
              Next
            </Button>
          </Div>

          <Div white mb1>
            <Text
              name="BTC"
              hover-green
              green={feel.symbol === "BTC"}
              onClick={this.handleSymbolSelect}
              pointer
              dib
              mr3
              mb2
            >
              BTC
            </Text>

            <Text
              name="ETH"
              hover-green
              green={feel.symbol === "ETH"}
              onClick={this.handleSymbolSelect}
              pointer
              dib
              mr3
              mb2
            >
              ETH
            </Text>

            <Text
              name="LTC"
              hover-green
              green={feel.symbol === "LTC"}
              onClick={this.handleSymbolSelect}
              pointer
              dib
              mb2
            >
              LTC
            </Text>
          </Div>

          <Div white>
            <Text
              name="1"
              hover-green
              green={feel.days === 1}
              onClick={this.handleDurationClick}
              pointer
              dib
              mr3
              mb2
            >
              24 hours
            </Text>

            <Text
              name="7"
              hover-green
              green={feel.days === 7}
              onClick={this.handleDurationClick}
              pointer
              dib
              mr3
              mb2
            >
              7 Days
            </Text>

            <Text
              name="30"
              hover-green
              green={feel.days === 30}
              onClick={this.handleDurationClick}
              pointer
              dib
              mr3
              mb2
            >
              30 Days
            </Text>

            <Text
              name="365"
              hover-green
              green={feel.days === 365}
              onClick={this.handleDurationClick}
              pointer
              dib
              mb2
            >
              365 Days
            </Text>
          </Div>
        </Div>

        {feel.permalink && <React.Fragment>
          <Text as="label" db white tl mb1>Permalink</Text>
          <Input
            id="permalink"
            db
            ph1
            pv2
            mb2
            w-100
            readOnly
            value={feel.permalink}
            disabled={!feel.permalink}
            // action={<Button icon="copy" onClick={this.handleCopyPermalink} />}
            onClick={this.handlePermalinkClick}
          />
        </React.Fragment>}

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
