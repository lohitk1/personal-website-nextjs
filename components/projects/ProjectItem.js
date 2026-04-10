import Link from "next/link";

function ProjectItem(props) {
  const tags = props.tech ? props.tech.split(",").map((t) => t.trim()) : [];

  return (
    <li className="proj-card">
      <h3 className="proj-title">{props.title}</h3>

      {tags.length > 0 && (
        <div className="proj-tags">
          {tags.map((tag, i) => (
            <span key={i} className="proj-tag">{tag}</span>
          ))}
        </div>
      )}

      <ul className="bullet-list">
        {Array.isArray(props.description)
          ? props.description.map((point, i) => <li key={i}>{point}</li>)
          : <li>{props.description}</li>
        }
      </ul>

      {props.link && (
        <Link href={props.link} target="_blank" rel="noopener noreferrer" className="proj-link">
          View Project →
        </Link>
      )}
    </li>
  );
}

export default ProjectItem;
