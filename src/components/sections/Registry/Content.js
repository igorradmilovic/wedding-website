import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faAsterisk,
} from "@fortawesome/free-solid-svg-icons";
import macys_logo from "../../../assets/img/registry/macys_logo.png";
import crateandbarrel_logo from "../../../assets/img/registry/crateandbarrel_logo.png";
import "./style.scss";

const Content = () => {
  return (
    <div className="section">
      <div className="registry">
        <div className="registry-image" />
        <br />
        <div className="registry-text">
          <div className="sub-title text-center section-header">
            Our Registries
          </div>
          <br />
          <FontAwesomeIcon className="registry-text-icon" icon={faAsterisk} />
          <a
            href="https://www.macys.com/wgl/registry/guest/NICOLE-BINGO-IGOR-RADMILOVIC/7313966"
            target="_blank"
            rel="noreferrer"
          >
            <div className="registry-information">
              <div className="registry-name">
                <img alt="Macy's" src={macys_logo} />
              </div>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </div>
          </a>
          <a
            href="https://www.crateandbarrel.com/gift-registry/nicole-bingo-and-igor-radmilovic/r6433871"
            target="_blank"
            rel="noreferrer"
          >
            <div className="registry-information">
              <div className="registry-name">
                <img alt="Crate&Barrel" src={crateandbarrel_logo} />
              </div>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;
