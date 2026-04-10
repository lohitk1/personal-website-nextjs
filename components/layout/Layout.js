import { Fragment } from "react";
import NavBar from "./NavBar";
import styles from "./layout.module.css";

function Layout(props) {
  return (
    <div className={styles.wrapper}>
      <NavBar />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
