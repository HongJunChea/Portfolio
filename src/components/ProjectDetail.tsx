import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects, ProjectCategory } from "../utils/projects";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaPlay } from "react-icons/fa";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-deep-space flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-cyber text-neon-blue mb-4">Project Not Found</h1>
          <Link to="/" className="text-neon-cyan hover:text-neon-blue transition-colors">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deep-space overflow-hidden">
      <div className="global-particle-bg"></div>
      <div className="global-cyber-grid"></div>
      
      <div className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-neon-cyan hover:text-neon-blue transition-colors mb-8 font-tech"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -5 }}
          >
            <FaArrowLeft /> Back
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl break-words font-cyber font-black text-neon-blue neon-text mb-4">
              {project.title}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mb-8"></div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-strong rounded-xl overflow-hidden border border-neon-blue/20">
              <img 
                src={project.cover || `${import.meta.env.BASE_URL}assets/projects/placeholder.png`} 
                alt={project.title}
                className={`w-full h-full ${project.screenshots?.length ? "max-h-[640px] object-contain bg-deep-space p-4" : "object-cover"}`}
              />
            </div>

            <div className="space-y-6">
              <div className="glass-strong rounded-xl p-6 border border-neon-blue/20">
                <h2 className="text-2xl font-cyber text-neon-cyan mb-4">Description</h2>
                <p className="text-gray-300 font-futura leading-relaxed">
                  {project.longDesc || project.desc}
                </p>
              </div>

              <div className="glass-strong rounded-xl p-6 border border-neon-blue/20">
                <h2 className="text-2xl font-cyber text-neon-cyan mb-4">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-sm font-tech bg-neon-blue/10 text-neon-blue border border-neon-blue/30 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {project.video_link && (
                  <a
                    href={project.video_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-futuristic flex items-center justify-center gap-2"
                  >
                    <FaPlay />
                    <span>Watch Demo</span>
                  </a>
                )}
                {project.deploy_link && project.deploy_link !== "#" && (
                  <motion.a
                    href={project.deploy_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-futuristic flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </motion.a>
                )}
                {project.code_links && project.code_links.length > 0 && (
                  <motion.a
                    href={project.code_links[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-futuristic bg-gradient-to-r from-neon-purple to-neon-pink flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub />
                    <span>View Code</span>
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>

          {project.presentation && (
            <section className="glass-strong rounded-xl p-6 sm:p-8 border border-neon-cyan/30 mb-12" aria-label="Research presentation">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h2 className="text-2xl sm:text-3xl font-cyber text-neon-cyan">Research Presentation</h2>
                <span className="px-3 py-1 rounded-full text-sm font-tech text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/30">
                  {project.presentation.role}
                </span>
              </div>
              <h3 className="text-xl font-cyber text-neon-blue mb-3">{project.presentation.event}</h3>
              <p className="text-gray-300 font-futura leading-relaxed mb-6">
                Presented this research on personality-modulated NPC emotion dynamics for game dialogue at the symposium.
              </p>
              <dl className="grid sm:grid-cols-2 gap-4 mb-6 font-futura">
                <div>
                  <dt className="text-sm text-neon-cyan font-tech mb-1">Event Dates</dt>
                  <dd className="text-gray-300">{project.presentation.dates}</dd>
                </div>
                <div>
                  <dt className="text-sm text-neon-cyan font-tech mb-1">Location</dt>
                  <dd className="text-gray-300">{project.presentation.venue}</dd>
                </div>
              </dl>
              <a href={project.presentation.certificateUrl} target="_blank" rel="noopener noreferrer" className="btn-futuristic inline-flex items-center gap-2">
                <FaExternalLinkAlt /> View Certificate
              </a>
            </section>
          )}

          {project.evaluation && (
            <section className="space-y-8 mb-12" aria-label="Research and evaluation">
              <div className="glass-strong rounded-xl p-6 border border-neon-blue/20">
                <h2 className="text-2xl font-cyber text-neon-cyan mb-4">My Contribution</h2>
                <p className="text-gray-300 font-futura leading-relaxed">{project.evaluation.contribution}</p>
              </div>
              <div className="glass-strong rounded-xl p-6 border border-neon-blue/20">
                <h2 className="text-2xl font-cyber text-neon-cyan mb-4">Methodology</h2>
                <ul className="list-disc pl-5 space-y-3 text-gray-300 font-futura leading-relaxed">
                  {project.evaluation.methodology.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-cyber text-neon-blue neon-text mb-6">Evaluation Results</h2>
                <div className="space-y-6">
                  {[
                    { label: "Overall test set", samples: project.evaluation.testSamples, rows: project.evaluation.results },
                    { label: "Boundary ages 18–24", samples: project.evaluation.boundarySamples, rows: project.evaluation.boundaryResults }
                  ].map(group => (
                    <div key={group.label} className="glass-strong rounded-xl p-4 sm:p-6 border border-neon-blue/20">
                      <div className="overflow-x-auto">
                        <table className="w-full min-w-[560px] text-left font-futura text-gray-300">
                          <caption className="text-left text-neon-cyan font-tech mb-4">
                            {group.label} · {group.samples.toLocaleString("en-US")} images
                          </caption>
                          <thead>
                            <tr className="border-b border-neon-blue/30 text-neon-cyan">
                              {["Model", "Accuracy (%)", "Precision (%)", "Recall (%)", "F1 (%)"].map(label => (
                                <th key={label} scope="col" className="p-3 text-sm">{label}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {group.rows.map(row => (
                              <tr key={row.model} className={`border-b border-neon-blue/10 ${row.model === "ViT" ? "bg-neon-blue/10" : ""}`}>
                                <th scope="row" className="p-3 font-medium">{row.model}</th>
                                {[row.accuracy, row.precision, row.recall, row.f1].map((value, index) => (
                                  <td key={index} className="p-3 tabular-nums">{value.toFixed(2)}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 font-futura leading-relaxed mt-6">{project.evaluation.findings}</p>
              </div>
              <div className="glass-strong rounded-xl p-6 border border-neon-blue/20">
                <h2 className="text-2xl font-cyber text-neon-cyan mb-4">Limitations &amp; Next Steps</h2>
                <ul className="list-disc pl-5 space-y-3 text-gray-300 font-futura leading-relaxed">
                  {project.evaluation.limitations.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </section>
          )}

          {project.screenshots && project.screenshots.length > 0 && (
            <section className="mb-12" aria-label="Project screenshots">
              <h2 className="text-2xl font-cyber text-neon-cyan mb-6">Project Screenshots</h2>
              <div className={`grid gap-6 ${project.categories?.includes(ProjectCategory.MOBILE) ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
                {project.screenshots.map(screenshot => (
                  <figure key={screenshot.src} className="glass-strong rounded-xl p-4 border border-neon-blue/20">
                    <a href={screenshot.src} target="_blank" rel="noopener noreferrer" aria-label={`View full-size screenshot: ${screenshot.label}`}>
                      <img src={screenshot.src} alt={`${project.title} — ${screenshot.label}`} className="w-full max-h-[560px] object-contain rounded-lg" loading="lazy" />
                    </a>
                    <figcaption className="text-center text-neon-cyan font-tech mt-4">{screenshot.label}</figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}

          {project.features && project.features.length > 0 && (
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-cyber text-neon-blue neon-text mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="glass-strong rounded-xl p-4 border border-neon-blue/20 flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <span className="text-neon-cyan text-xl">✓</span>
                    <span className="text-gray-300 font-futura">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {project.techDetails && project.techDetails.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl font-cyber text-neon-blue neon-text mb-6">Technical Details</h2>
              <div className="glass-strong rounded-xl p-6 border border-neon-blue/20">
                <ul className="space-y-3">
                  {project.techDetails.map((detail, index) => (
                    <motion.li
                      key={index}
                      className="text-gray-300 font-futura flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    >
                      <span className="text-neon-blue">→</span>
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {project.code_links && project.code_links.length > 1 && (
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-3xl font-cyber text-neon-blue neon-text mb-6">Source Code</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.code_links.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-strong rounded-xl p-6 border border-neon-blue/20 hover:border-neon-blue transition-all duration-300 flex items-center justify-between group"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{link.icon}</span>
                      <div>
                        <div className="text-neon-cyan font-cyber group-hover:text-neon-blue transition-colors">
                          {link.label}
                        </div>
                        <div className="text-sm text-gray-400 font-tech">View Repository</div>
                      </div>
                    </div>
                    <FaGithub className="text-2xl text-neon-blue group-hover:text-neon-cyan transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
