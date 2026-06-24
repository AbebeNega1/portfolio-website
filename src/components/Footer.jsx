import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaTelegram,
  FaFacebook,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <a
          href="https://www.linkedin.com/in/abebe-nega-7635903aa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/AbebeNega1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a href="mailto:abebenega23@gmail.com">
          <FaEnvelope />
        </a>

        <a
          href="https://t.me/Gbrs7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram />
        </a>

        <a
          href="https://www.facebook.com/abebe.nega.948"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </div>

      <p>
        © 2025/26 Abebe Nege Belete | Computer Engineering Graduate
      </p>
    </footer>
  );
}

export default Footer;