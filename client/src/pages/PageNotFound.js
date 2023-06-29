import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <Layout title={"Page Not Found Sorry..."}>
      <div className="pnf text-center justify-center mx-4 sm:mx-auto my-64">
        <h1 className="png-title text-4xl sm:text-5xl">404</h1>
        <h1 className="png-heading text-4xl sm:text-5xl">
          Oops! Page Not Found
        </h1>
        <Link
          to="/"
          className="pngbtn text-4xl sm:text-5xl mt-10 border-black border-2 rounded-md"
          style={{ marginTop: "10px" }}
        >
          Go Back
        </Link>
      </div>
    </Layout>
  );
}

export default PageNotFound;
