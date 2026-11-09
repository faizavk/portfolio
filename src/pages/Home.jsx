import { Link } from "react-router-dom";
import { profile } from "../data";

const ticker =
  `Faiza V K  ·  Information Science  ·  RVITM  ·  Bengaluru  ·  9.52 ${profile.cgpaNote}  ·  `;

export default function Home() {
  return (
    <section className="intro">
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>{ticker.repeat(2)}</span>
          <span>{ticker.repeat(2)}</span>
        </div>
      </div>

      <p className="eyebrow">Information Science</p>
      <h1>Faiza V K</h1>
      <div className="intro-split">
        <div>
          <p className="who">
            A class, two chapters, and a job, while the degree is still underway.
          </p>
          <p className="lede">
            I can sit a backend round, a data round, or a full-stack round and open
            a project for each. Stanford had me teach. Springer is printing two
            chapters. I am a development intern at ArtIntele. Python for data and
            APIs. Java for algorithms. Go when the machines have to agree.
          </p>
          <p className="next">
            <Link to="/work">The work is the next screen.</Link>
          </p>
        </div>
        <ul className="creds">
          <li>Development intern, ArtIntele</li>
          <li>Section leader, Code in Place, Stanford</li>
          <li>Information Science, RVITM · {profile.cgpa} {profile.cgpaNote}</li>
          <li>Two Springer chapters, in press</li>
        </ul>
      </div>
    </section>
  );
}
