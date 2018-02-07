import * as feelzApi from "../../api/feelz";
import React from "react";
import Layout from "../../components/Layout";
import Feel from "../../components/Feel";
import { fixedHeight200 } from "../../utils/giphy";

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

  static async getInitialProps({ req, query = {} }) {
    const { feelzId } = query;

    const [feel, error] = await feelzApi.fetchFeel(feelzId);
    const og = ShowFeelzPage.mapFeelToOg(feel);

    return {
      error,
      data: {
        og,
        feel,
      },
    };
  }

  render() {
    const { data: { feel, og }, error, url } = this.props;

    return (
      <Layout title={`Cryptofeelz | ${feel.caption}`} og={og}>
        <Feel {...feel} />

        <style global jsx>{`
        body {
          background: #333333;
        }
      `}</style>
      </Layout>
    );
  }
}

ShowFeelzPage.defaultProps = {
  error: null,
};

export default ShowFeelzPage;