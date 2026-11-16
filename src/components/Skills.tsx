const groups = [
  {
    number: "01",
    title: "Programming",
    description: "Languages I use to build gameplay, tools, and applications.",
    skills: ["C#", "C++", "Python", "C", "JavaScript", "Java"],
  },
  {
    number: "02",
    title: "Game development",
    description: "From third-person adventures to VR interaction and puzzle systems.",
    skills: ["Unity 2D/3D", "URP", "Cinemachine", "Timeline", "NavMesh", "Animator", "Input System", "OpenXR", "XR Toolkit"],
  },
  {
    number: "03",
    title: "Graphics & computing",
    description: "Lower-level graphics, parallel computing, and spatial fundamentals.",
    skills: ["OpenGL", "DirectX 9", "CUDA", "OpenMP", "MPI", "3D transforms", "Hierarchical modelling"],
  },
  {
    number: "04",
    title: "Tools & communication",
    description: "Development workflow plus the languages I work in.",
    skills: ["Git", "GitHub", "GitKraken", "Visual Studio", "Mandarin", "English", "Malay"],
  },
];

const Skills = () => (
  <section className="section toolkit-section" id="skills-section">
    <div className="page-width">
      <div className="section-heading compact"><div><p className="eyebrow">Toolkit</p><h2>Practical tools for interactive work.</h2></div></div>
      <div className="skill-groups">
        {groups.map((group) => (
          <article key={group.title}><span className="skill-number">{group.number}</span><div><h3>{group.title}</h3><p>{group.description}</p><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></div></article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;

