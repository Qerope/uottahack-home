import "./Sponsor.css";
import React, { Component } from "react";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../images/sponsors", false, /\.(png|jpe?g|svg)$/)
);

class NewSponsor extends Component {
  render() {
    return (
      <div id="NewSponsors">
        <div className="ui centered grid" id="blurWrap">
          <div className="row">
            <a href="https://newsponser.website/" target="_blank">
              <img
                src={images["newsponser-placeholder.png"]}
                style={{ width: "200px" }}
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewSponsor;
