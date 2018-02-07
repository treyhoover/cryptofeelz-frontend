import React from "react";
import Head from 'next/head'

const Layout = ({ children, title, og }) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />

      {/* Open Graph Tags */}
      {og.title && <meta property="og:title" content={og.title} />}
      {og.type && <meta property="og:type" content={og.type} />}
      {og.url && <meta property="og:url" content={og.url} />}
      {og.image && <meta property="og:image" content={og.image} />}
    </Head>

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