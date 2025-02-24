import React from "react";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <title>React Helmet PoC</title>
        <meta name="description" content="This is a sample page using React Helmet." />
      </Helmet>
      <h1>React Helmet PoC</h1>
      <p>Check the page title and meta description!</p>
    </div>
  );
}

export default App;
