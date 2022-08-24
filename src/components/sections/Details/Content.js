import React from "react";
import { details } from "../../../data/details";

import "./style.scss";

const Content = () => {
  return (
    <div className="section">
      <div className="details">
        <div className="sub-title text-center section-header">
          Wedding Details
        </div>
        <br />
        {details.map((detail, i) => (
          <div key={i} className="detail-item">
            <div className="detail-icon">{detail.icon}</div>
            <div className="detail-title">{detail.key}</div>
            <div className="detail-content">
              <div>{detail.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
