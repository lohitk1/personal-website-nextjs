import ProjectsList from "../../components/projects/ProjectList";
import { projects_data } from "../../components/projects/ProjectData";
import styles from "../../styles/css/projectspage.module.css";

export default function Projects() {
  return (
    <div className={styles.projectspage}>
      <h1 className="section-heading">Projects</h1>
      <ProjectsList projects={projects_data} />
    </div>
  );
}
