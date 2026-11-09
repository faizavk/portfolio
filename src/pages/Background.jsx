import { experience, languages, profile, publications } from "../data";

export default function Background() {
  return (
    <>
      <div className="layout">
        <p className="kicker">Education</p>
        <div className="edu">
          <p className="cgpa">
            <b>{profile.cgpa.replace("/10", "")}</b>
            <span>/10</span>
            <span className="cgpa-note">{profile.cgpaNote}</span>
          </p>
          <div>
            <h3>{profile.degree}</h3>
            <p>{profile.school}</p>
            <p className="meta">{profile.years}</p>
          </div>
        </div>
      </div>

      <div className="layout">
        <p className="kicker">Languages</p>
        <div>
          <p>
            Java and Python are not the same job. Algorithms rounds get Java,
            including the papers I set for The Coder’s Club. Pipelines, models,
            and APIs get Python. I will not rewrite a Java solution into Python
            so a profile looks tidy.
          </p>
          <dl className="deflist">
            {languages.map((language) => (
              <div key={language.name}>
                <dt>{language.name}</dt>
                <dd>{language.use}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="layout">
        <p className="kicker">Work</p>
        <ul className="timeline">
          {experience.map((item) => (
            <li key={item.role}>
              <div>
                <h3>
                  {item.role}
                  <span className="org">, {item.org}</span>
                </h3>
                <p>{item.detail}</p>
              </div>
              <span className="when">{item.when}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="layout">
        <p className="kicker">On paper</p>
        <div>
          {publications.map((item) => (
            <div className="entry" key={item.title}>
              <p className="kicker">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
