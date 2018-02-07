import React from "react";
import Head from 'next/head'
import tachyons from "tachyons/css/tachyons.min.css";

const Layout = ({ children, title, og }) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />

      {/* Open Graph Tags */}
      {Object.entries(og).map(([key, value]) => (
        <meta key={key} property={`og:${key}`} content={value} />
      ))}

      <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
    </Head>

    <style jsx global>{tachyons}</style>

    {children}

  </React.Fragment>
);

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
