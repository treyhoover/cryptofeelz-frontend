import React from 'react';
import { connect } from "react-redux";
import { Div, Video } from 'reactyons';
import Symbol from "~/containers/Symbol";
import Duration from "~/containers/Duration";
import Percentage from "~/components/Percentage";
import { fetchCoin } from "~/redux/coin/actionCreators";
import { getCoin } from "~/redux/coin/selectors";
import { getFeelz } from "~/redux/feelz/selectors";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCoin();
  }

  render() {
    const { coin, feelz } = this.props;
    const { price: { percentChange } } = coin;
    const upOrDown = percentChange >= 0 ? "up" : "down";

    if (coin.error || feelz.error) return "Error!";
    if (coin.loading || feelz.loading) return "Loading...";

    return (
      <Div flex flex-column flex-auto pa7 bg-black-90>
        <Video autoPlay loop src={feelz.url} />

        <Div mt3 mb4 tc sans-serif white>
          When <Symbol /> is {upOrDown} <Percentage>{percentChange}</Percentage> in the past <Duration />
        </Div>
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
