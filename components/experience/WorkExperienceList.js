import WorkExperienceItem from "./WorkExperienceItem";

function WorkExperienceList(props) {
  return (
    <ul className="exp-list">
      {props.experiences?.map((exp) => (
        <WorkExperienceItem
          key={exp.id}
          id={exp.id}
          date={exp.date}
          company={exp.company}
          location={exp.location}
          role={exp.role}
          description={exp.description}
        />
      ))}
    </ul>
  );
}

export default WorkExperienceList;
