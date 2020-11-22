import React from "react";
import { Link } from "@reach/router";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <>
      <section className={styles.links}>

      <Link to="../weather">
        <div><p>Weather</p></div>
      </Link>

      <Link to="../quiz">
        <div><p>Quiz</p></div>
      </Link>

      <Link to="../football">
        <div><p>Football</p></div>
      </Link>




      </section>
    </>
  );
};

export default NavBar;
