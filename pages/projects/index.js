import ProjectsList from "../../components/projects/ProjectList";
import { projects_data } from "../../components/projects/ProjectData";

import styles from "../../styles/css/projectspage.module.css";

export default function Projects() {
  return (
    <div className={styles.projectspage}>
      <article>
        <ProjectsList projects={projects_data} />
      </article>
    </div>
  );
}
