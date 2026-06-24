function Projects() {
  const projects = [
{
  title: "Intelligent Patient Triage & Appointment Management System",
  description:
    "A web-based healthcare platform that uses machine learning to assist patient triage, symptom assessment, and appointment scheduling.",
  tech: "React • JavaScript • Python • Flask • Machine Learning",
  github: "https://github.com/AbebeNega1/intelligent-triage-system",
  image: "/images/intelligent1.jpg",
  featured: true,
},
{
  title: "Garage Management System",
  description:
    "Web application for managing vehicle services, customer records, and maintenance tracking.",
  tech: "React • HTML • CSS • JavaScript",
  github: "https://github.com/AbebeNega1/AAGYSGarage",
  image: "/images/garage.jpg",
  featured: false,
},
{
  title: "Mini AI Triage System",
  description:
    "AI-powered healthcare prototype that provides symptom analysis and triage recommendations.",
  tech: "Python • Flask • Machine Learning",
  github: "https://github.com/AbebeNega1/mini-ai-triage-system",
  image: "/images/mini triage1.jpg",
  featured: false,
},
{
  title: "Student Pass Predictor",
  description:
    "Machine learning application that predicts student academic performance using historical educational data.",
  tech: "React • Flask • Python • Scikit-Learn",
  github: "https://github.com/AbebeNega1/student-pass-predictor",
  image: "/images/studentpass.jpg",
  featured: false,
},


  ];

  return (
    <section
  id="projects"
  className="projects"
  data-aos="fade-up"
>
      
      <h2 className="section-title">Projects</h2>
      <div className="title-dot"></div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div
  className="project-card"
  key={index}
  data-aos="fade-up"
  data-aos-delay={index * 150}
>

  {project.featured && (
    <div className="featured-badge">
      🏆 A+ Final Year Project
    </div>
  )}

<div className="project-image">
  <img
    src={project.image}
    alt={project.title}
  />
</div>
 <h3>{project.title}</h3>

<p>{project.description}</p>

<span>{project.tech}</span>

<div className="project-links">
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub
  </a>

  <a className="demo-coming-soon">
    Demo Soon
  </a>
</div>
          </div>
          
        ))}
      </div>
    </section>
  );
}

export default Projects;