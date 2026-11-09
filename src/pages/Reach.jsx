import { profile } from "../data";

const links = [
  { label: "Resume", href: profile.resume },
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email", href: `mailto:${profile.email}`, text: profile.email },
  {
    label: "Phone",
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    text: profile.phone,
  },
];

export default function Reach() {
  return (
    <section className="reach-page">
      <p className="eyebrow">Reach</p>
      <h2 className="page-title">Reach me</h2>
      <p className="who">
        Resume, GitHub, LinkedIn, email, and phone. One place.
      </p>
      <ul className="reach-list">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href}>
              <span>{link.label}</span>
              {link.text ? <small>{link.text}</small> : null}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
