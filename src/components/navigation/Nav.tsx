import React from "react";
import { faHome, faUserAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <FontAwesomeIcon icon={faHome} />
          home
        </li>
        <li>
          <FontAwesomeIcon icon={faUserAlt} />
          about
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
          contact
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
