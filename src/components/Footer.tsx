import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer" id="contact-section">
      <div className="page-width">
        <div className="footer-cta">
          <p className="eyebrow">Available Jan-Jun 2027</p>
          <h2>Looking for a game developer, QA tester, or software engineer intern?</h2>
          <a className="button button-light" href="mailto:cheahongjun@gmail.com">Let’s talk <FaArrowRight /></a>
        </div>
        <div className="footer-bottom">
          <div><strong>Chea Hong Jun</strong><span>Kuala Lumpur, Malaysia · +60 14-395 4339</span></div>
          <div className="footer-links">
            <a href="https://github.com/HongJunChea" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
            <a href="https://www.linkedin.com/in/hong-jun-chea-769516296" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
            <a href="mailto:cheahongjun@gmail.com">Email</a>
          </div>
          <span>© {new Date().getFullYear()} Chea Hong Jun</span>
        </div>
      </div>
    </footer>
  );
}

