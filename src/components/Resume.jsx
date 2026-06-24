function Resume() {
  return (
    <section id="resume" className="resume">
      <h2 className="section-title">Resume</h2>
      <div className="title-dot"></div>

      <div className="resume-card">
        <p>
          Download or view my professional resume to learn more about my
          education, technical skills, projects, and experience.
        </p>

        <div className="resume-buttons">
         <a
  href="/Abebe_Nega_Belete_cv_file.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="btn"
>
  View Resume
</a>

<a
  href="/Abebe_Nega_Belete_cv_file.pdf"
  download
  className="btn btn-outline"
>
  Download Resume
</a>
        </div>
      </div>
    </section>
  );
}

export default Resume;