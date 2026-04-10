import WorkExperienceItem from "./WorkExperienceItem";

function WorkExperienceList(props) {
  return (
    <div>
      <ul className="list">
        {props.experiences?.map((experience) => (
          <WorkExperienceItem
            key={experience.id}
            id={experience.id}
            date={experience.date}
            company={experience.company}
            location={experience.location}
            role={experience.role}
            description={experience.description}
          />
        ))}
      </ul>
    </div>
  );
}

export default WorkExperienceList;
