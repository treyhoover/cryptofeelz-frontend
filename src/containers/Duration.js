import React from "react";
import { connect } from "react-redux";
import Autocomplete from "react-autocomplete";
import { Div } from "reactyons";
import { getCoin } from "~/redux/coin/selectors"
import { setDays} from "~/redux/coin/actionCreators"

const ALL_DURATIONS = [
  { value: 1, label: "24 hours" },
  { value: 7, label: "week" },
  { value: 30, label: "month" },
  { value: 365, label: "year" },
];

class Duration extends React.Component {
  constructor(props) {
    super(props);

    const duration = ALL_DURATIONS.find(({ value }) => value === props.days);

    this.state = {
      input: duration.label,
    };
  }

  get durations() {
    const { input } = this.state;

    const matches = ALL_DURATIONS.filter(({ label }) => label.startsWith(input));

    if (matches.length === 1 && matches[0].label === input) {
      return ALL_DURATIONS;
    } else {
      return matches;
    }
  }

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleSelect = days => {
    const duration = ALL_DURATIONS.find(({ value }) => String(value) === String(days));

    if (duration) {
      this.setState({ input: duration.label });

      this.props.setDays(duration.value);
    }
  };

  render() {
    const { input } = this.state;

    return (
      <Autocomplete
        getItemValue={item => String(item.value)}
        items={this.durations}
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
            <div key={item.value}>
              <Div {...itemProps}>
                {item.label}
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
  days: getCoin(state).days,
});

export default connect(mapStateToProps, {
  setDays,
})(Duration);
