import { Link, useParams } from "react-router-dom";
import { projectBySlug } from "../data";

export default function Work() {
  const { slug } = useParams();
  const project = projectBySlug(slug);

  if (!project) {
    return (
      <div className="layout">
        <p className="kicker">Work</p>
        <div>
          <h2 className="page-title">No writeup under that name.</h2>
          <p>
            <Link to="/work">Back to the work.</Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <article className="layout">
      <p className="kicker">{project.kicker}</p>
      <div>
        <Link className="back" to="/work">
          ← All work
        </Link>
        <div className="feature-well">
          <img className="feature" src={project.image} alt={project.imageAlt} />
        </div>
        <h2 className="page-title">{project.title}</h2>
        <p className="stackline">
          {project.stack.join(", ")} · {project.status}
        </p>
        {project.demo && (
          <div className="note">
            <p className="kind">{project.demo.kind}</p>
            <p>{project.demo.text}</p>
          </div>
        )}
        {project.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {project.table && (
          <table>
            <caption>{project.table.caption}</caption>
            <thead>
              <tr>
                {project.table.columns.map((column) => (
                  <th key={column} scope="col">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {project.table.rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell) => (
                    <td key={cell}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {project.after?.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {project.links && (
          <ul className="links">
            {project.links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
