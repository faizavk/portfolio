import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data";

const order = [
  "hadoop-logs",
  "spectus",
  "smart-campus",
  "copilot",
  "finops",
  "elenchus",
  "raft-store",
  "aedeswatch",
];

export default function Projects() {
  const listed = order
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean);
  const [index, setIndex] = useState(0);
  const project = listed[index];
  const count = listed.length;

  function step(delta) {
    setIndex((current) => (current + delta + count) % count);
  }

  if (!project) return null;

  return (
    <section
      className="deck"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") step(1);
        if (event.key === "ArrowLeft") step(-1);
      }}
    >
      <div className="deck-top">
        <p className="eyebrow">Work</p>
        <p className="count">
          {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </p>
      </div>
      <div className="deck-body">
        <img src={project.image} alt={project.imageAlt} />
        <div>
          <p className="kicker">{project.kicker}</p>
          <h2>{project.title}</h2>
          <p className="hook">{project.summary}</p>
          <p className="stackline">{project.stack.join(" · ")}</p>
          <Link className="read" to={`/work/${project.slug}`}>
            Read it
          </Link>
        </div>
      </div>
      <div className="deck-nav">
        <button type="button" onClick={() => step(-1)}>
          Previous
        </button>
        <div className="dots" role="tablist" aria-label="Projects">
          {listed.map((item, i) => (
            <button
              key={item.slug}
              type="button"
              className={i === index ? "on" : undefined}
              aria-label={`Show ${item.title}`}
              aria-selected={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <button type="button" onClick={() => step(1)}>
          Next
        </button>
      </div>
    </section>
  );
}
