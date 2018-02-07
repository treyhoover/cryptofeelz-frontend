import React from "react";
import * as feelzApi from "../../api/feelz";
import Layout from "../../components/Layout";
import Feel from "../../components/Feel";
import { fixedHeight200 } from "../../utils/giphy";

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

  static async getInitialProps({ req, query = {} }) {
    const { symbol, days } = query;

    const [feel, error] = await feelzApi.createFeel({ symbol, days });
    const og = NewFeelzPage.mapFeelToOg(feel);

    return {
      error,
      data: {
        feel,
        og,
      },
    };
  }

  render() {
    const { data: { feel, og }, error, url } = this.props;

    return (
      <Layout title={`Cryptofeelz | ${feel.caption}`} og={og}>
        <h1 className="ui header">This is the new feelz page!</h1>

        <Feel {...feel} />
      </Layout>
    );
  }
}

NewFeelzPage.defaultProps = {
  error: null,
};

export default NewFeelzPage;