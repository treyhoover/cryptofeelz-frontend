import React from "react";
import withRedux from "next-redux-wrapper";
import { fetchFeelSuccess, fetchFeelError } from "../redux/feel/actions"
import { fetchFeel, setSymbol, setDays } from "../redux/feel/actionCreators";
import * as feelzApi from "../api/feelz";
import Layout from "../components/Layout";
import Feel from "../containers/Feel";
import { fixedHeight200 } from "../utils/giphy";
import { initStore } from "../redux/store"

class NewFeelzPage extends React.Component {
  static defaultProps;
  static mapFeelToOg = feel => {
    if (!feel) return {};

    return {
      title: feel.caption,
      type: "website",
      image: fixedHeight200(feel.gif),
    };
  };

  static async getInitialProps({ store, req, isServer, query = {} }) {
    const { symbol, days } = query;

    const [feel, error] = await feelzApi.createFeel({ symbol, days });
    const og = NewFeelzPage.mapFeelToOg(feel);

    if (error) {
      store.dispatch(fetchFeelError(error));
    } else {
      store.dispatch(fetchFeelSuccess(feel));
    }

    return {
      isServer,
      og,
    };
  }

  render() {
    const { data: { feel }, og, error, url } = this.props;

    return (
      <Layout title={`Cryptofeelz | ${feel.caption}`} og={og}>
        <Feel />

        <style global jsx>{`
            body {
              background: #333333;
            }

            #__next {
              min-height: 100vh;
              display: flex;
              flex-direction: column;
              text-align: center;
            }

            #__next >* {
              margin: auto;
            }
          `}
        </style>

      </Layout>
    );
  }
}

NewFeelzPage.defaultProps = {
  error: null,
  isServer: false,
  data: {},
};

const mapStateToProps = ({ feel }) => ({
  data: {
    feel,
  }
});

const mapDispatchToProps = dispatch => ({
  fetchFeelSuccess,
  fetchFeelError,
  fetchFeel,
  setSymbol,
  setDays,
});

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(NewFeelzPage);