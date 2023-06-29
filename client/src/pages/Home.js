import React from "react";
import Layout from "../components/layout/Layout";
import { useAuth } from "../context/Auth";

function Home() {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Ecommerce App - Shop Now"}>
      <h1>This is home page</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
}

export default Home;
