import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
function Contact() {
  return (
    <section
  id="contact"
  className="contact"
  data-aos="fade-up"
>
      <h2 className="section-title">Contact Me</h2>
      <div className="title-dot"></div>

      <div className="contact-card">
        <h3>Let's Connect</h3>
<div className="contact-divider">
  <span></span>
</div>
        <p>
          I'm open to Software Engineering, Full-Stack Development,
          Python Development, and Machine Learning opportunities.
        </p>

      <div className="contact-info">

  <div className="contact-item">
    <div className="contact-icon">
  <FaEnvelope />
</div>
    <div className="contact-content">
  <a href="mailto:abebenega23@gmail.com">
  abebenega23@gmail.com
</a>
</div>
  </div>

  <div className="contact-item">
   <div className="contact-icon">
  <FaPhoneAlt />
</div>
    <div className="contact-content">
 <a href="tel:+251960024931">
  +251 960024931
</a>
</div>
  </div>

  <div className="contact-item">
    <div className="contact-icon">
  <FaMapMarkerAlt />
</div>
  <div className="contact-content">
  <a
  href="https://maps.google.com/?q=Addis+Ababa,Ethiopia"
  target="_blank"
  rel="noreferrer"
>
  Ethiopia
</a>
</div>
  </div>
<div className="contact-divider-bottom">
  <span></span>
</div>
  <div className="contact-links">
   <a
  href="https://github.com/AbebeNega1"
  target="_blank"
  rel="noreferrer"
>
  <FaGithub />
  <span>GitHub Profile</span>
  <FaArrowRight />
</a>
  </div>

</div>
      </div>
    </section>
  );
}

export default Contact;