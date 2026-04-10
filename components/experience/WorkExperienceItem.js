function WorkExperienceItem(props) {
  return (
    <li className="item">
      <div className="date">
        <h2>{props.date}</h2>
      </div>
      <div className="company">
        <h3>
          {props.company} | {props.location}
        </h3>
      </div>
      <div className="role">
        <h4>{props.role}</h4>
      </div>
      <div className="description">
        {Array.isArray(props.description) ? (
          <ul className="bullet-list">
            {props.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        ) : (
          <p>{props.description}</p>
        )}
      </div>
    </li>
  );
}

export default WorkExperienceItem;
