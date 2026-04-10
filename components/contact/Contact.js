import Link from "next/link";

import styles from "./contact.module.css";

function Contact() {
  return (
    <div className={styles.footer}>
      <section>
        <form method="post" action="" className={styles.formf}>
          <div className={styles.fields}>
            <div className={styles.field}>
              <label htmlFor="name" className={styles.labell}>
                Name
              </label>
              <input type="text" name="name" id="name" />
            </div>
            <div className={styles.field}>
              <label htmlFor="email" className={styles.labell}>
                Email
              </label>
              <input type="email" name="email" id="email" />
            </div>
            <div className={styles.field}>
              <label htmlFor="message" className={styles.labell}>
                Message
              </label>
              <textarea name="message" id="message" rows="3"></textarea>
            </div>
          </div>
          <ul className={styles.action}>
            <li>
              <input
                type="submit"
                value="Send Message"
                className={styles.buttonsubmit}
              />
            </li>
          </ul>
        </form>
      </section>
      <section className={styles.splitcontact}>
        <section>
          <h3>Phone</h3>
          <p>(734) 510-0789</p>
        </section>
        <section>
          <h3>Email</h3>
          <p>
            <Link href="mailto:lohitk@umich.edu">lohitk@umich.edu</Link>
          </p>
        </section>
        <section>
          <h3>Social</h3>
          <ul className={styles.iconsalt}>
            <li>
              <a
                href="https://www.linkedin.com/in/lohitk"
                className={styles.icon}
              >
                <span className={styles.label}>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/lohitk1" className={styles.icon}>
                <span className={styles.label}>GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/lohit_reddyk/"
                className={styles.icon}
              >
                <span className={styles.label}>Instagram</span>
              </a>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
}

export default Contact;
