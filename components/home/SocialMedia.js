import Link from "next/link";
import Image from "next/image";
import mail from "../../assets/icons/mail.png";
import git from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import insta from "../../assets/icons/instagram.png";
import styles from "./socialmedia.module.css";

function SocialMedia() {
  const links = [
    { href: "mailto:lohitk@umich.edu",              src: mail,    alt: "Email"     },
    { href: "https://github.com/lohitk1",            src: git,     alt: "GitHub"    },
    { href: "https://www.linkedin.com/in/lohitk",   src: linkedin, alt: "LinkedIn" },
    { href: "https://www.instagram.com/lohit_reddyk/", src: insta, alt: "Instagram"},
  ];

  return (
    <div className={styles.socmedcontainer}>
      <ul className={styles.socmeditems}>
        {links.map(({ href, src, alt }) => (
          <li key={alt}>
            <Link href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer">
              <Image src={src} alt={alt} width={22} height={22} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialMedia;
