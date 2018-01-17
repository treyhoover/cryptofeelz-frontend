import React from 'react';
import { connect } from "react-redux";
import { Div, Span, P, Video } from 'reactyons';
import { fetchCoin } from "~/redux/coin/actionCreators";
import { getCoin } from "~/redux/coin/selectors";
import { getFeelz } from "~/redux/feelz/selectors";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCoin();
  }

  render() {
    const { coin, feelz } = this.props;
    const { symbol, days: t, price: { percentChange } } = coin;
    const duration = t === 1 ? "24 hours" : `${t} days`;
    const p = Math.abs(Math.floor(percentChange));
    const upOrDown = percentChange >= 0 ? "up" : "down";
    const c = { green: percentChange >= 0, red: percentChange < 0 };

    if (coin.error || feelz.error) return "Error!";
    if (coin.loading || feelz.loading) return "Loading...";

    return (
      <Div flex flex-column flex-auto pa7 bg-black-80>
        <Video autoPlay loop src={feelz.url} />

        <P tc sans-serif white>
          When {symbol} is {upOrDown} <Span {...c}>{p}%</Span> in the past {duration}...
        </P>
      </Div>
    );
  }
}

const mapStateToProps = state => ({
  coin: getCoin(state),
  feelz: getFeelz(state),
});

export default connect(mapStateToProps, {
  fetchCoin,
})(App);
