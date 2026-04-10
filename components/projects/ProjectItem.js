import Link from "next/link";

function ProjectItem(props) {
  return (
    <li className="item">
      <div className="title">
        <h2>{props.title}</h2>
      </div>
      <div className="tech">
        <h4>{props.tech}</h4>
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
      {props.link && (
        <div className="link">
          <Link href={props.link}>Link to Project</Link>
        </div>
      )}
    </li>
  );
}

export default ProjectItem;
