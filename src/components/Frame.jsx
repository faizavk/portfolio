import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { profile } from "../data";

export default function Frame() {
  const { pathname } = useLocation();
  const onWork = pathname.startsWith("/work");

  return (
    <div className="shell">
      <aside className="rail">
        <Link className="brand" to="/">
          Faiza
        </Link>
        <nav aria-label="Site">
          <NavLink to="/" end>
            Me
          </NavLink>
          <NavLink
            to="/work"
            className={({ isActive }) =>
              isActive || onWork ? "active" : undefined
            }
          >
            Work
          </NavLink>
          <NavLink to="/background">Background</NavLink>
          <NavLink to="/reach">Reach</NavLink>
        </nav>
        <p className="rail-foot">{profile.place}</p>
      </aside>
      <main className="stage">
        <Outlet />
      </main>
    </div>
  );
}
