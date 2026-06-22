function Projects() {
  const projects = [
   {
  title: "Intelligent Patient Triage & Appointment Management System",
  description:
    "A web-based healthcare platform that uses machine learning to assist patient triage, symptom assessment, and appointment scheduling.",
  tech: "React • JavaScript • Python • Flask • Machine Learning",
  featured: true,
},
    {
      title: "Student Pass Predictor",
      description:
        "Machine learning application that predicts student academic performance using historical educational data.",
      tech: "React • Flask • Python • Scikit-Learn",
      featured: false,
    },
    {
      title: "Mini AI Triage System",
      description:
        "AI-powered healthcare prototype that provides symptom analysis and triage recommendations.",
      tech: "Python • Flask • Machine Learning",
      featured: false,
    },
    {
      title: "Garage Management System",
      description:
        "Web application for managing vehicle services, customer records, and maintenance tracking.",
      tech: "React • HTML • CSS • JavaScript",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="projects">
      
      <h2 className="section-title">Projects</h2>
      <div className="title-dot"></div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>

  {project.featured && (
    <div className="featured-badge">
      A+ Final Year Project
    </div>
  )}

  <div className="project-image">
    Project Screenshot
  </div>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span>{project.tech}</span>
            <div className="project-links">
  <a href="#">GitHub</a>
  <a href="#">Demo</a>
</div>
          </div>
          
        ))}
      </div>
    </section>
  );
}

export default Projects;