import IntroPara from "../../components/about/IntroPara";
import MyPic from "../../components/about/MyPic";
import Skills from "../../components/about/Skills";

import styles from "../../styles/css/aboutpage.module.css";

export default function AboutPage() {
  return (
    <div className={styles.aboutpage}>

      {/* Bio: photo left, text right */}
      <div className={styles.bio}>
        <div className={styles.picCol}>
          <MyPic />
        </div>
        <div className={styles.textCol}>
          <h1 className="section-heading" style={{ marginBottom: "0.75rem" }}>
            About Me
          </h1>
          <IntroPara />
        </div>
      </div>

      {/* Skills card */}
      <div className={styles.skillsSection}>
        <h2 className="section-heading">Skills</h2>
        <Skills />
      </div>

    </div>
  );
}
