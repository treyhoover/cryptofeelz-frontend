import React from "react";
import Head from 'next/head'
import ReactGA from 'react-ga';
import tachyons from "tachyons/css/tachyons.min.css";

class Layout extends React.Component {
  componentDidMount() {
    ReactGA.initialize('UA-112855262-1');

    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    const { children, title, og } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />

          {/* Open Graph Tags */}
          {Object.entries(og).map(([key, value]) => (
            <meta key={key} property={`og:${key}`} content={value} />
          ))}
        </Head>

        <style jsx global>{tachyons}</style>

        {children}

      </React.Fragment>
    );
  }
}

Layout.defaultProps = {
  title: "Cryptofeelz",
  og: {
    title: "Cryptofeelz",
    type: "website",
    url: "",
    image: "",
  }
};

export default Layout;
