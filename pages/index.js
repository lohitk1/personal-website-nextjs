import IntroText from "../components/home/IntroText";
import styles from "../styles/css/homepage.module.css";

export default function HomePage() {
  return (
    <div className={styles.homepage}>
      <div>
        <IntroText />
      </div>
    </div>
  );
}
