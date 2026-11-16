import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaArrowUpRightFromSquare, FaGithub, FaPlay } from "react-icons/fa6";
import { projects } from "../utils/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <main className="detail-page detail-missing">
        <p className="eyebrow">404 / Project not found</p>
        <h1>That build is not in the archive.</h1>
        <Link className="button button-primary" to="/">Back to portfolio</Link>
      </main>
    );
  }

  return (
    <main className="detail-page">
      <div className="page-width">
        <Link className="back-link" to="/#projects-section"><FaArrowLeft /> Back to all work</Link>

        <header className="detail-header">
          <div>
            <div className="detail-kicker">
              <span>{project.collaboration || "Project case study"}</span>
              {project.contribution && <span>{project.contribution}</span>}
            </div>
            <h1>{project.title}</h1>
            <p>{project.longDesc || project.desc}</p>
            <div className="detail-actions">
              {project.code_links?.[0] && (
                <a className="button button-primary" href={project.code_links[0].url} target="_blank" rel="noreferrer">
                  <FaGithub /> View source <FaArrowUpRightFromSquare />
                </a>
              )}
              {project.deploy_link && project.deploy_link !== "#" && (
                <a className="button button-secondary" href={project.deploy_link} target="_blank" rel="noreferrer">
                  Live project <FaArrowUpRightFromSquare />
                </a>
              )}
              {project.video_link && (
                <a className="button button-secondary" href={project.video_link} target="_blank" rel="noreferrer">
                  <FaPlay /> Watch demo
                </a>
              )}
            </div>
          </div>
          <div className="detail-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </header>

        <figure className="detail-cover">
          <img src={project.cover} alt={project.title} />
        </figure>

        {(project.features?.length || project.techDetails?.length) && (
          <section className="detail-two-column">
            <div>
              <p className="eyebrow">What it does</p>
              <h2>Key features</h2>
              <ul className="detail-list">
                {project.features?.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Under the hood</p>
              <h2>Technical approach</h2>
              <ul className="detail-list">
                {project.techDetails?.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </div>
          </section>
        )}

        {project.evaluation && (
          <section className="evaluation">
            <div className="section-heading compact">
              <div><p className="eyebrow">Research &amp; evaluation</p><h2>My contribution and measured results</h2></div>
              <p>{project.evaluation.contribution}</p>
            </div>
            <div className="method-grid">
              <div><h3>Methodology</h3><ul className="detail-list">{project.evaluation.methodology.map((item) => <li key={item}>{item}</li>)}</ul></div>
              <div><h3>Finding</h3><p>{project.evaluation.findings}</p></div>
            </div>
            {[
              { title: "Overall test set", samples: project.evaluation.testSamples, rows: project.evaluation.results },
              { title: "Boundary ages 18–24", samples: project.evaluation.boundarySamples, rows: project.evaluation.boundaryResults },
            ].map((group) => (
              <div className="result-table-wrap" key={group.title}>
                <div className="table-title"><strong>{group.title}</strong><span>{group.samples.toLocaleString("en-US")} images</span></div>
                <table className="result-table">
                  <thead><tr><th>Model</th><th>Accuracy</th><th>Precision</th><th>Recall</th><th>F1</th></tr></thead>
                  <tbody>
                    {group.rows.map((row) => (
                      <tr key={row.model} className={row.model === "HOG + SVM" ? "highlight" : ""}>
                        <th>{row.model}</th><td>{row.accuracy.toFixed(2)}%</td><td>{row.precision.toFixed(2)}%</td><td>{row.recall.toFixed(2)}%</td><td>{row.f1.toFixed(2)}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
            <div className="limitations"><h3>Limitations &amp; next steps</h3><ul>{project.evaluation.limitations.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </section>
        )}

        {project.screenshots && project.screenshots.length > 1 && (
          <section className="gallery">
            <div><p className="eyebrow">Project gallery</p><h2>The work in context</h2></div>
            <div className="gallery-grid">
              {project.screenshots.map((shot) => (
                <figure key={shot.src}><img src={shot.src} alt={`${project.title} — ${shot.label}`} loading="lazy" /><figcaption>{shot.label}</figcaption></figure>
              ))}
            </div>
          </section>
        )}

        <section className="next-project">
          <p>Want to see how the rest of the work connects?</p>
          <Link className="button button-primary" to="/#projects-section">Explore all projects <FaArrowUpRightFromSquare /></Link>
        </section>
      </div>
    </main>
  );
};

export default ProjectDetail;

