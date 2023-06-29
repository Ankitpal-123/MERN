import React from "react";
import Header from "./Header";
import Fotter from "./Fotter";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

function Layout({ children, title, description, keywords, author }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <Toaster />
        {children}
      </main>
      <Fotter />
    </>
  );
}

Layout.defaultProps = {
  title: "Ecommerce app - Shop now",
  description: "Designed By MERN",
  keywords: "mern, react,mongoDb,noe.js",
  author: "PR INFOCARE PVT LTD",
};

export default Layout;
