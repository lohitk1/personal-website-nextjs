import WorkExperienceList from "../../components/experience/WorkExperienceList";
import { experiences_data } from "../../components/experience/WorkExperienceData";
import styles from "../../styles/css/experiencepage.module.css";

export default function WorkExperience() {
  return (
    <div className={styles.experiencepage}>
      <h1 className="section-heading">Experience</h1>
      <div className={styles.card}>
        <WorkExperienceList experiences={experiences_data} />
      </div>
    </div>
  );
}
