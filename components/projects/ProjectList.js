import ProjectItem from "./ProjectItem";

function ProjectList(props) {
  return (
    <ul className="proj-list">
      {props.projects?.map((project) => (
        <ProjectItem
          key={project.id}
          id={project.id}
          title={project.title}
          tech={project.tech}
          description={project.description}
          link={project.link}
        />
      ))}
    </ul>
  );
}

export default ProjectList;
