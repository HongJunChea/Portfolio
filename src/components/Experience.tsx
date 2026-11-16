import { FaArrowUpRightFromSquare, FaHeadset, FaGraduationCap } from "react-icons/fa6";

const timeline = [
  {
    period: "Jun 2025 — Expected Jun 2027",
    title: "BSc (Hons) Computer Science",
    place: "TAR UMT · Interactive Software Technology · CGPA 3.44/4.00",
    detail: "Specializing in games, interactive systems, graphics, AI, and parallel computing.",
    icon: <FaGraduationCap />,
  },
  {
    period: "Oct 2024 — Jan 2025",
    title: "IT Support",
    place: "Alpine Technology Sdn Bhd",
    detail: "Handled customer-reported software issues and guided users through troubleshooting steps to restore normal use.",
    icon: <FaHeadset />,
  },
  {
    period: "Jun 2023 — May 2025",
    title: "Diploma in Computer Science",
    place: "TAR UMT · CGPA 3.42/4.00",
    detail: "Built foundations in programming, databases, web development, software design, and Unity.",
    icon: <FaGraduationCap />,
  },
];

export const Experience = () => (
  <section className="section about-section" id="about-section">
    <div className="page-width about-grid">
      <div className="about-copy">
        <p className="eyebrow">About / experience</p>
        <h2>I like the part where ideas become systems.</h2>
        <p className="about-lead">My work is hands-on: build the mechanic, test the edge cases, listen for what feels off, and keep improving it.</p>
        <p>I’m interested in game development, QA testing, and software engineering. My team projects have taught me how to work across gameplay, UI, audio, data, level design, and machine-learning pipelines while keeping changes reviewable through Git.</p>
        <a className="text-link" href="https://www.linkedin.com/in/hong-jun-chea-769516296" target="_blank" rel="noreferrer">View LinkedIn <FaArrowUpRightFromSquare /></a>
        <aside className="research-note">
          <span>Internship search</span>
          <strong>Available January-June 2027</strong>
          <p>Seeking opportunities in Kuala Lumpur across game development, QA testing, or software engineering.</p>
        </aside>
      </div>
      <ol className="timeline">
        {timeline.map((item) => (
          <li key={item.title}>
            <div className="timeline-icon">{item.icon}</div>
            <div><span>{item.period}</span><h3>{item.title}</h3><strong>{item.place}</strong><p>{item.detail}</p></div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

