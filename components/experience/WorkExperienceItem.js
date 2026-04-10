function WorkExperienceItem(props) {
  return (
    <li className="exp-item">
      <span className="exp-date">{props.date}</span>
      <div className="exp-header">
        <h3 className="exp-company">{props.company}</h3>
        <span className="exp-location">{props.location}</span>
      </div>
      <h4 className="exp-role">{props.role}</h4>
      <ul className="bullet-list">
        {Array.isArray(props.description)
          ? props.description.map((point, i) => <li key={i}>{point}</li>)
          : <li>{props.description}</li>
        }
      </ul>
    </li>
  );
}

export default WorkExperienceItem;
