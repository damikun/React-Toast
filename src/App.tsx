/* Author: Dalibor Kundrat  https://github.com/damikun */
//@ts-nocheck
import React from "react";
import "./App.css";
import HomePage from "./HomePage/Home";
import Layout from "./HomePage/Layout";
import Providers from "./Providers";

function App() {
  return (
    <Providers>
      <Layout>
        <HomePage />
      </Layout>
    </Providers>
  );
}

export default App;
