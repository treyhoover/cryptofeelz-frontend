import React from "react";
import { connect } from "react-redux";
import { Button, Dropdown, Header, Container } from "semantic-ui-react";
import { fetchFeel, setSymbol, setDays } from "~/redux/feel/actionCreators";
import { getFeel } from "~/redux/feel/selectors";
import * as coin from "~/constants/coins";
import styles from "./styles.css";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchFeel();
  }

  get loading() {
    const { feel } = this.props;

    return feel.loading;
  }

  handleSymbolSelect = (e, { value }) => {
    if (!!value) {
      this.props.setSymbol(value);
    }
  };

  handleDurationClick = e => {
    const days = Number(e.target.name);

    this.props.setDays(days);
  };

  handleRefreshClick = e => {
    this.props.fetchFeel();
  };

  render() {
    const { feel } = this.props;

    return (
      <Container className={styles.homePage}>
        <div>
          {feel.caption && <Header inverted>
            {feel.caption}
          </Header>}

          <div>
            {feel.gif && <img
              alt={feel.emotion}
              src={`https://media1.giphy.com/media/${feel.gif}/200.gif`}
            />}
          </div>
        </div>

        <div id="controls">
          <Dropdown
            placeholder="Select coin"
            value={feel.symbol}
            options={coin.options}
            search
            selection
            onChange={this.handleSymbolSelect}
          />

          {/*<div db dib-ns w-100 w-auto-ns id="durations">*/}
          {/*{map(daysLabelMap, (label, d) => {*/}
          {/*const active = String(days) === d;*/}

          {/*return (*/}
          {/*<Button*/}
          {/*key={d}*/}
          {/*name={d}*/}
          {/*db*/}
          {/*dib-ns*/}
          {/*w-100*/}
          {/*w-auto-ns*/}
          {/*ttc*/}
          {/*onClick={this.handleDurationClick}*/}
          {/*inverted={active}*/}
          {/*disabled={active}*/}
          {/*>*/}
          {/*{label}*/}
          {/*</Button>*/}
          {/*);*/}
          {/*})}*/}
          {/*</div>*/}

          <Button
            primary
            name="refresh"
            onClick={this.handleRefreshClick}
          >
            Refresh
          </Button>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  feel: getFeel(state),
});

export default connect(mapStateToProps, {
  setSymbol,
  setDays,
  fetchFeel,
})(App);
