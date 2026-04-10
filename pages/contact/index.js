import Contact from "../../components/contact/Contact";
import styles from "../../styles/css/contactpage.module.css";

export default function ContactPage() {
  return (
    <div className={styles.contactpage}>
      <h1 className="section-heading">Get In Touch</h1>
      <Contact />
    </div>
  );
}
