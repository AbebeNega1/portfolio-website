import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h3>Hello, I'm</h3>

        <h1 className="typing-name">Abebe Nege Belete</h1>

        <h2>
  Computer Engineering Graduate
</h2>

<p className="hero-role">
  Full-Stack Developer | Python Developer |
  Machine Learning Enthusiast
</p>

        <p>
          Passionate about building intelligent software solutions using
          React, Python, Flask, and Machine Learning.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn">
            View Projects
          </a>

          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
    <a
  href="/Abebe_Nega_Belete_cv_file.pdf"
  download
  className="btn btn-outline"
>
  Download Resume
</a>
        </div>
      
      <div className="social-links">
  <a
    href="https://github.com/AbebeNega1"
    target="_blank"
    rel="noreferrer"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn
  </a>
</div>
      </div>

      <div className="hero-image">
        <img src={profile} alt="Abebe Nege Belete" />
      </div>
       
    </section>
    
  );
}

export default Hero;