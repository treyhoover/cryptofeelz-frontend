import React from "react";
import Head from 'next/head'
import { Footer, Ul, Li } from "reactyons";
import Text from "./Text";
import Image from "./Image";
import ReactGA from 'react-ga';

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

        {children}

        <Footer pv3 ph1 sans-serif>
          <Text dib mb1 white>Feeling generous?</Text>
          <Ul f7 list pa0 style={{ wordBreak: "break-all" }}>
            <Li mb2 flex items-center white>
              <Image mr2 src="/static/btc.png" />
              19jzgXgnxiPbHpHn998M4U5DbPadRaw3qK
            </Li>
            <Li mb2 flex items-center white>
              <Image mr2 src="/static/eth.png" />
              0x8cF93d6820b3C918ea352A7B03245fdd1f48C145
            </Li>
            <Li flex items-center white>
              <Image mr2 src="/static/ltc.png" />
              LeHzB9B7a3AuE4g9HegjJRrJSwmToFj9oS
            </Li>
          </Ul>
        </Footer>

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
