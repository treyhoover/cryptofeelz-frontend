import React from "react";
import { connect } from "react-redux";
import { map } from "lodash";
import { Input, Button, Dropdown } from "semantic-ui-react";
import * as coin from "../constants/coins";
import { fetchFeel, setSymbol, setDays } from "../redux/feel/actionCreators";
import Feel from "../components/Feel";

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
    const { feel } = this.props;

    return (
      <div>
        <div>
          <Feel {...feel} />

          <div style={{ width: feel.width }}>
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

        <div>
          <Dropdown
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

        <div>
          <Button.Group>
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
    )
  }
}

const mapStateToProps = state => ({
  feel: state.feel,
});

export default connect(mapStateToProps, {
  setDays,
  setSymbol,
})(FeelContainer);
