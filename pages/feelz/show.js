import React from "react";
import withRedux from "next-redux-wrapper";
import * as feelzApi from "../../api/feelz";
import { fetchFeelSuccess, fetchFeelError } from "../../redux/feel/actions"
import Layout from "../../components/Layout";
import Feel from "../../containers/Feel";
import { fixedHeight200 } from "../../utils/giphy";
import { initStore } from "../../redux/store"

class ShowFeelzPage extends React.Component {
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
    const { feelzId } = query;

    const [feel, error] = await feelzApi.fetchFeel(feelzId);
    const og = ShowFeelzPage.mapFeelToOg(feel);

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

ShowFeelzPage.defaultProps = {
  error: null,
};

const mapStateToProps = ({ feel }) => ({
  data: {
    feel,
  }
});

const mapDispatchToProps = dispatch => ({
});

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(ShowFeelzPage);