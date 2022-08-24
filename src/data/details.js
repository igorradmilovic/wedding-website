import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faClock,
  faMapMarkerAlt,
  faMapMarkedAlt,
  faHotel,
  faQuestionCircle,
  faCarAlt,
  faExternalLinkAlt,
  faWalking,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

export const details = [
  {
    icon: <FontAwesomeIcon icon={faCalendarAlt} color="goldenrod" />,
    key: "Date",
    value: (
      <div>
        <span className="detail-content-medium">
          Saturday, July 16th, 2022{" "}
        </span>
      </div>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={faMapMarkerAlt} color="goldenrod" />,
    key: "Venue",
    value: (
      <a
        href="https://www.wintergardenbymonroes.com/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          style={{ fontSize: "14px" }}
          icon={faExternalLinkAlt}
        />{" "}
        <span className="detail-content-medium">
          The Wintergarden by Monroe's
        </span>
      </a>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={faMapMarkedAlt} color="goldenrod" />,
    key: "Address",
    value: (
      <a
        href="https://goo.gl/maps/7aAkLpRBmMaoSgVq6"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          style={{ fontSize: "14px" }}
          icon={faExternalLinkAlt}
        />{" "}
        <span className="detail-content-medium">
          1 Bausch and Lomb Pl, Rochester, NY 14604
        </span>
      </a>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={faClock} color="goldenrod" />,
    key: "Ceremony/Reception",
    value: (
      <div>
        <span className="detail-content-medium">
          Ceremony to begin at 5:00 PM
        </span>
        <br />
        <span className="detail-content-medium">Reception to follow</span>
        <div className="detail-content-xsmall">
          Ceremony & Reception both held at the Wintergarden
        </div>
      </div>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={faUserTie} color="goldenrod" />,
    key: "Wedding Attire",
    value: (
      <div>
        <span className="detail-content-medium">Cocktail</span>
      </div>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={faHotel} color="goldenrod" />,
    key: "Hotel Blocks",
    value: (
      <div>
        <a
          href="https://www.hyatt.com/en-US/group-booking/ROCHE/G-BIRA"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            style={{ fontSize: "14px" }}
            icon={faExternalLinkAlt}
          />{" "}
          <span className="detail-content-medium">Hyatt Regency Rochester</span>
        </a>
        <div className="detail-content-small">
          Wedding Code for Booking: <span className="booking-code">G-BIRA</span>
        </div>
        <div className="detail-content-small">(585) 546-1234</div>
        <div className="detail-content-small">
          125 East Main Street, Rochester, NY 14604
        </div>
        <div className="detail-content-xsmall">
          0.2 miles from The Wintergarden (~ 5 minute walk)
        </div>
        <br />
        <a
          href="https://secure3.hilton.com/en_US/gi/reservation/book.htm?ctyhocn=ROCEMGI&corporateCode=0110175&from=lnrlink"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            style={{ fontSize: "14px" }}
            icon={faExternalLinkAlt}
          />{" "}
          <span className="detail-content-medium">
            Hilton Garden Inn Rochester Downtown
          </span>
        </a>
        <div className="detail-content-small">
          Wedding Code for Booking:{" "}
          <span className="booking-code">0110175</span>
        </div>
        <div className="detail-content-small">(585) 232-5000</div>
        <div className="detail-content-small">
          155 East Main Street, Rochester, NY 14604
        </div>
        <div className="detail-content-xsmall">
          0.2 miles from The Wintergarden (~ 5 minute walk)
        </div>
      </div>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={faCarAlt} color="goldenrod" />,
    key: "Parking",
    value: (
      <div>
        <div>
          <span className="detail-content-medium">
            Parking available at the hotels and <br />
            <a
              href="https://goo.gl/maps/p9GTAHmuuzfGKfc76"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                style={{ fontSize: "14px" }}
                icon={faExternalLinkAlt}
              />{" "}
              Court Street Parking Garage
            </a>
          </span>
        </div>
      </div>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={faWalking} color="goldenrod" />,
    key: "Things to Do",
    value: (
      <div>
        <div className="detail-content-medium">
          Our Favorites
          <br />
          <a
            href="https://www.geneseebeer.com/brewhouse/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              style={{ fontSize: "14px" }}
              icon={faExternalLinkAlt}
            />{" "}
            Genesee Brew House
          </a>
          <br />
          <a href="https://garbageplate.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              style={{ fontSize: "14px" }}
              icon={faExternalLinkAlt}
            />{" "}
            Nick Tahou Hots
          </a>
          <br />
          <a
            href="https://www.jinesrestaurant.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              style={{ fontSize: "14px" }}
              icon={faExternalLinkAlt}
            />{" "}
            Jines Restaurant
          </a>
        </div>
        <div className="detail-content-medium">
          More
          <br />
          <a
            href="https://www.busytourist.com/things-to-do-in-rochester-ny/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              style={{ fontSize: "14px" }}
              icon={faExternalLinkAlt}
            />{" "}
            28 Best & Fun Things To Do In Rochester (New York)
          </a>
        </div>
      </div>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={faQuestionCircle} color="goldenrod" />,
    key: "Questions",
    value: (
      <div
        className="detail-content-medium"
        style={{ wordBreak: "break-word" }}
      >
        Call, Text or{" "}
        <a href="mailto:nicolebingo@gmail.com?cc=igorradmilovic1@gmail.com&subject=Wedding Question">
          Email Us!
        </a>
      </div>
    ),
  },
];
