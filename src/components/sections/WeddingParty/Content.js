import React from "react";
import groomsman_pic from "../../../assets/img/wedding-party/groomsman_pic.png";
import flowergirl_pic from "../../../assets/img/wedding-party/flowergirl_pic.jpeg";
import maidofhonor_pic from "../../../assets/img/wedding-party/maidofhonor_pic.JPEG";
import bridesmaid_pic from "../../../assets/img/wedding-party/bridesmaid_pic.jpeg";
import bestman_pic from "../../../assets/img/wedding-party/bestman_pic.jpeg";
import "./style.scss";

const Content = () => {
  return (
    <div className="section">
      <div className="wedding-party__container">
        <div className="sub-title text-center section-header">
          Meet the Wedding Party
        </div>
        <br />
        <div className="wedding-party">
          <div className="wedding-party__grid">
            <div className="sub-title">Bride</div>
            <br />
            <div className="wedding-party__grid-item maid-of-honor">
              <div className="wedding-party__title">
                Maid of Honor
                <span>
                  <div className="wedding-party__name">Breann Coffaro</div>
                </span>
              </div>
              <div className="wedding-party__description">
                <img src={maidofhonor_pic} alt="Maid Of Honor" />
              </div>
            </div>
            <br />
            <hr />
            <br />
            <div className="wedding-party__grid-item">
              <div className="wedding-party__title">
                Bridesmaid
                <span>
                  {" "}
                  <div className="wedding-party__name">
                    Ines Radmilovic-Gesner
                  </div>
                </span>
              </div>
              <div className="wedding-party__description">
                <img src={bridesmaid_pic} alt="Bridesmaid" />
              </div>
            </div>
          </div>
          <div className="vl" />
          <div className="wedding-party__grid">
            <div className="sub-title">Groom</div>
            <br />
            <div className="wedding-party__grid-item best-man">
              <div className="wedding-party__title">
                Best Man{" "}
                <span>
                  {" "}
                  <div className="wedding-party__name">Stefano Daza</div>
                </span>
              </div>
              <div className="wedding-party__description">
                <img src={bestman_pic} alt="Best Man" />
              </div>
            </div>
            <br />
            <hr />
            <br />
            <div className="wedding-party__grid-item">
              <div className="wedding-party__title">
                Groomsman{" "}
                <span>
                  {" "}
                  <div className="wedding-party__name">Chad Bingo</div>
                </span>
              </div>
              <div className="wedding-party__description">
                <img src={groomsman_pic} alt="Groomsman" />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="flower-girl">
          <div className="wedding-party__grid-item">
            <div className="sub-title">
              Flower Girl{" "}
              <span>
                {" "}
                <div className="wedding-party__name">Alexandra Gesner</div>
              </span>
            </div>
            <div className="wedding-party__description">
              <img src={flowergirl_pic} alt="Flower Girl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
