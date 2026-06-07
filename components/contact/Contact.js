import Link from "next/link";
import styles from "./contact.module.css";

function Contact() {
  return (
    <div className={styles.contactWrap}>

      <div className={styles.info}>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Phone</span>
          <span className={styles.infoValue}>(734) 510-0789</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Email</span>
          <Link href="mailto:kamatham.lohit@gmail.com" className={styles.infoLink}>
            kamatham.lohit@gmail.com
          </Link>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>LinkedIn</span>
          <Link
            href="https://www.linkedin.com/in/lohitk"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.infoLink}
          >
            linkedin.com/in/lohitk
          </Link>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>GitHub</span>
          <Link
            href="https://github.com/lohitk1"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.infoLink}
          >
            github.com/lohitk1
          </Link>
        </div>
      </div>

      <form className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input type="text" id="name" name="name" className={styles.input} placeholder="Your name" />
        </div>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input type="email" id="email" name="email" className={styles.input} placeholder="your@email.com" />
        </div>
        <div className={styles.field}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea id="message" name="message" rows="5" className={styles.textarea} placeholder="What's on your mind?" />
        </div>
        <button type="submit" className={styles.submit}>Send Message</button>
      </form>

    </div>
  );
}

export default Contact;
