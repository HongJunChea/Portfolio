import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaArrowUpRightFromSquare, FaBars, FaGithub, FaXmark } from "react-icons/fa6";

const links = [
  { id: "projects-section", label: "Work" },
  { id: "about-section", label: "About" },
  { id: "skills-section", label: "Toolkit" },
  { id: "contact-section", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const goTo = (id: string) => {
    setOpen(false);
    window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 30);
  };

  return (
    <header className={`topbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="topbar-inner">
        <Link className="wordmark" to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className="wordmark-mark">CH</span>
          <span className="wordmark-text">Chea Hong Jun</span>
        </Link>
        <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Primary navigation">
          {links.map((link) => <Link key={link.id} to={`/#${link.id}`} onClick={() => goTo(link.id)}>{link.label}</Link>)}
          <a className="nav-github" href="https://github.com/HongJunChea" target="_blank" rel="noreferrer">
            <FaGithub /> GitHub <FaArrowUpRightFromSquare />
          </a>
        </nav>
        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation">
          {open ? <FaXmark /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;

