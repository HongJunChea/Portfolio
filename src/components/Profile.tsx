import { motion } from "framer-motion";
import { FaArrowDown, FaArrowUpRightFromSquare, FaFileArrowDown } from "react-icons/fa6";

const Profile = () => {
  const assetBase = import.meta.env.BASE_URL;
  return (
    <section className="hero" id="home">
      <div className="hero-grid page-width">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="availability"><span /> Available for internship · Jan-Jun 2027</div>
          <p className="eyebrow">Game developer · Software engineer · QA-minded builder</p>
          <h1>I turn game ideas into playable systems.</h1>
          <p className="hero-intro">
            I’m Chea Hong Jun, a Computer Science student in Kuala Lumpur specializing in Interactive Software Technology.
            I build with Unity, C#, C++, graphics APIs, and Python—and I enjoy the debugging and iteration that make a game feel complete.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects-section">Explore my work <FaArrowDown /></a>
            <a className="button button-secondary" href={`${assetBase}assets/Chea_Hong_Jun_Resume.pdf`} target="_blank" rel="noreferrer">
              <FaFileArrowDown /> Resume <FaArrowUpRightFromSquare />
            </a>
          </div>
          <dl className="hero-stats">
            <div><dt>3.44 / 4.00</dt><dd>current CGPA</dd></div>
            <div><dt>Unity · C++</dt><dd>primary craft</dd></div>
            <div><dt>4 team projects</dt><dd>shared portfolio work</dd></div>
          </dl>
        </motion.div>

        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.96, rotate: 1.5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
          <div className="hero-window">
            <div className="window-bar"><span /><span /><span /><p>build / chichis-bizarre-adventure</p></div>
            <img src={`${assetBase}assets/projects/3D-Game.png`} alt="Chichi's Bizarre Adventure gameplay" />
          </div>
          <div className="visual-note note-top">Unity · C# · URP</div>
          <div className="visual-note note-bottom">77 repo contributions</div>
          <div className="profile-chip">
            <div className="profile-monogram">CHJ</div>
            <span><strong>Based in Kuala Lumpur</strong> Game development · QA · software engineering</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;

