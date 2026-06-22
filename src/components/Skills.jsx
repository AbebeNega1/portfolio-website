import {
  FaPalette,
  FaCog,
  FaRobot,
  FaTools,
  FaNetworkWired
} from "react-icons/fa";
function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="title-dot"></div>

      <div className="skills-container">

  <div className="skill-card">
   <h3>
  <FaPalette className="skill-icon" />
  Frontend Development
</h3>
    <ul>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>JavaScript</li>
      <li>React.js</li>
    </ul>
  </div>

  <div className="skill-card">
    <h3>
  <FaCog className="skill-icon" />
  Backend Development
</h3>
    <ul>
      <li>Python</li>
      <li>Flask</li>
      <li>REST APIs</li>
    </ul>
  </div>

  <div className="skill-card">
    <h3>
  <FaRobot className="skill-icon" />
  Machine Learning
</h3>
    <ul>
      <li>Scikit-Learn</li>
      <li>Data Analysis</li>
      <li>Predictive Modeling</li>
      <li>Model Training</li>
    </ul>
  </div>

  <div className="skill-card">
    <h3>
  <FaTools className="skill-icon" />
  Tools & Technologies
</h3>
    <ul>
      <li>Git</li>
      <li>GitHub</li>
      <li>VS Code</li>
      <li>Linux</li>
    </ul>
  </div>
<div className="skill-card">
  <h3>
  <FaNetworkWired className="skill-icon" />
  Networking & Systems
</h3>
  <ul>
    <li>Computer Networks</li>
    <li>Network Fundamentals</li>
    <li>TCP/IP</li>
    <li>System Administration</li>
  </ul>
</div>
</div>
    </section>
  );
}

export default Skills;