function Skills() {
  return (
    <div>
      <div className="skills-container">
        {/* Paragraph about soft skills */}
        <p className="soft-skills">
          I'm an efficent and hard worker that brings leadership qualities to
          the table. My areas of <br />
          expertise are economics and computer science, more specifically:
          machine learning and web <br />
          development. Here are my techincal skills:
        </p>
        {/* Techincal skills */}
        <div className="tech-skills-container">
          <ul className="tech-skills-items">
            <li>
              <h3>Programming</h3>
              <ul>
                <li>Python</li>
                <li>C++</li>
                <li>Java</li>
              </ul>
            </li>
            <li>
              <h3>Web Development</h3>
              <ul>
                <li>HTML + CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>NextJS</li>
                <li>Django</li>
              </ul>
            </li>
            <li>
              <h3>Database Management</h3>
              <ul>
                <li>MySQL</li>
              </ul>
            </li>
            <li>
              <h3>AI/ML</h3>
              <ul>
                <li>Tensorflow</li>
                <li>SckitLearn</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
