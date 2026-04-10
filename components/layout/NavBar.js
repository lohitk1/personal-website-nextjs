import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";

import Logo from "../../assets/Logo.png";

function NavBar() {
  return (
    <div className={styles.navcontainer}>
      <ul className={styles.navitems}>
        <li className={styles.logo}>
          <Link href="/">
            <div className={styles.logoimg}>
              <Image src={Logo} alt="Logo" />
            </div>
          </Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/experience">Experience</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
