import React from "react";
import withRedux from "next-redux-wrapper";
import { fetchFeelSuccess, fetchFeelError } from "../redux/feel/actions"
import { fetchFeel, setSymbol, setDays } from "../redux/feel/actionCreators";
import Layout from "../components/Layout";
import Feel from "../containers/Feel";
import { initStore } from "../redux/store"

class NewFeelzPage extends React.Component {
  static defaultProps;

  render() {
    return (
      <Layout title={`Cryptofeelz`}>
        <Feel showError />

        <style global jsx>{`
            body {
              background: #333333;
            }

            #__next {
              min-height: 100vh;
              display: flex;
              flex-direction: column;
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