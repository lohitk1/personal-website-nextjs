import Link from "next/link";
import Image from "next/image";
import mail from "../../assets/icons/mail.png";
import git from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import insta from "../../assets/icons/instagram.png";

import styles from "./socialmedia.module.css";

function SocialMedia() {
  return (
    <div className={styles.socmedcontainer}>
      <ul className={styles.socmeditems}>
        <li>
          <Link href="mailto:lohitk@umich.edu">
            <Image src={mail} alt="Email" />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/lohitk1">
            <Image src={git} alt="GitHub" />
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/lohitk">
            <Image src={linkedin} alt="LinkedIn" />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/lohit_reddyk/">
            <Image src={insta} alt="Instagram" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SocialMedia;
