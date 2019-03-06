import React, { Component } from "react";

import Footer from "../../components/Layout/Footer/Footer";
import "./NodeExpressIntro.css";

class NodeExpressIntro extends Component {
  render() {
    return (
      <div>
        <div className="container FullArticle">
          <div className="row">
            <p className="h3 font-weight-bold articlehead">
              An introduction to Node.js and Express. Build a Node App from
              Scratch.
            </p>
          </div>
          <hr />
          <div>
            <p className="h2 text-center" style={{ marginTop: "15%" }}>
              comming soom...
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default NodeExpressIntro;
