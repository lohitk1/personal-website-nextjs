import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./navbar.module.css";
import Logo from "../../assets/Logo.png";

function NavBar() {
  const router = useRouter();

  const navLinks = [
    { href: "/about",      label: "About"      },
    { href: "/experience", label: "Experience" },
    { href: "/projects",   label: "Projects"   },
    { href: "/contact",    label: "Contact"    },
  ];

  return (
    <nav className={styles.navcontainer}>
      <div className={styles.logo}>
        <Link href="/">
          <div className={styles.logoimg}>
            <Image src={Logo} alt="Lohit Kamatham" />
          </div>
        </Link>
      </div>
      <ul className={styles.navitems}>
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={router.pathname === href ? styles.active : ""}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
