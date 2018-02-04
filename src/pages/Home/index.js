import React from "react";
import { map, get } from "lodash";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { Button, Dropdown, Header, Container, Input } from "semantic-ui-react";
import { fetchFeel, setSymbol, setDays } from "~/redux/feel/actionCreators";
import { getFeel } from "~/redux/feel/selectors";
import * as coin from "~/constants/coins";
import styles from "./styles.css";

const daysLabelMap = {
  "1": "24 hours",
  "7": "week",
  "30": "month",
  "365": "year",
};

class App extends React.Component {
  componentDidMount() {
    this.props.fetchFeel(this.id);
  }

  get loading() {
    const { feel } = this.props;

    return feel.loading;
  }

  get id() {
    return get(this.props, "match.params.id");
  }

  handleSymbolSelect = (e, { value }) => {
    const { history } = this.props;

    if (!!value) {
      if (this.id) {
        history.push("/");
      }

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
    const { feel, history } = this.props;

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
    this.props.fetchFeel(this.id);
  };

  render() {
    const { feel, browser } = this.props;
    const sm = browser.lessThan.medium;

    return (
      <div className={styles.homePage}>
        <Container className={styles.pageContent}>
          <div>
            {feel.caption && <Header as="h1" inverted>
              <span dangerouslySetInnerHTML={{
                __html: feel.formattedCaption
              }} />
            </Header>}

            <div className={styles.gifContainer}>
              {feel.gif && <img
                className={styles.gif}
                alt={feel.emotion}
                src={`https://media1.giphy.com/media/${feel.gif}/200.gif`}
              />}

              <div>
                <Input
                  id="permalink"
                  readOnly
                  value={feel.permalink}
                  action={<Button icon="copy" onClick={this.handleCopyPermalink} />}
                  onClick={this.handlePermalinkClick}
                  fluid
                />
              </div>
            </div>
          </div>


          <div className={styles.controls}>
            <div className={styles.dropdownGroup}>
              <Dropdown
                className={styles.dropdown}
                placeholder="Select coin"
                value={feel.symbol}
                options={coin.options}
                search
                selection
                onChange={this.handleSymbolSelect}
              />

              <Button
                attached="right"
                primary
                toggle
                icon="refresh"
                onClick={this.handleRefreshClick}
              />
            </div>

            <div className={styles.durations}>
              <Button.Group vertical={sm} widths={sm ? "4" : undefined}>
                {map(daysLabelMap, (label, d) => {
                  const active = String(feel.days) === d;

                  return (
                    <Button
                      key={d}
                      name={d}
                      onClick={this.handleDurationClick}
                      primary={active}
                    >
                      {label}
                    </Button>
                  );
                })}
              </Button.Group>
            </div>
          </div>

        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  feel: getFeel(state),
  browser: state.browser,
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    setSymbol,
    setDays,
    fetchFeel,
  })
)(App);
