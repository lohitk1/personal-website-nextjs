import styles from "./introtext.module.css";
import SocialMedia from "./SocialMedia";

function IntroText() {
  return (
    <div className={styles.fadein}>
      <div className={styles.introtext}>
        <div className={styles.socmed}>
          <SocialMedia />
        </div>
        <h1>
          LOHIT
          <br />
          KAMATHAM
        </h1>
        <p>
          University of Michigan, Ann Arbor
          <br />
          Masters in Computer Science Engineering
        </p>
      </div>
    </div>
  );
}

export default IntroText;
