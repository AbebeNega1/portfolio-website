import { FaCalendarAlt } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
function Education() {
  return (
   <section
  id="education"
  className="education"
  data-aos="zoom-in"
>
      <h2 className="section-title">Education</h2>
      <div className="title-dot"></div>

     <div className="education-card">
      <div className="education-icon">
  <FaGraduationCap />
</div>
  <h3>Haramaya University</h3>

  <h4>BSc in Electrical & Computer Engineering</h4>

<div className="education-info">
  <div className="graduation-row">
    <FaCalendarAlt />
    <span>Expected Graduation: <strong>2026</strong></span>
  </div>
</div>
<div className="education-divider">
  <span></span>
</div>
  <div className="education-details">
    <h5 className="project-heading">
  <FaFolderOpen />
  <span>Final Year Project</span>
</h5>

  <p className="project-title">
  Intelligent Patient Triage & Appointment
  Management System
</p>

<p className="project-subtitle">
  Developed using Machine Learning to optimize patient
  prioritization and appointment scheduling.
</p>

    <span>A+ Grade</span>
  </div>
</div>
    </section>
  );
}

export default Education;