import { Link, Route, Routes } from "react-router-dom";
import Frame from "./components/Frame";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import Background from "./pages/Background";
import Reach from "./pages/Reach";

export default function App() {
  return (
    <Routes>
      <Route element={<Frame />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Projects />} />
        <Route path="work/:slug" element={<Work />} />
        <Route path="background" element={<Background />} />
        <Route path="reach" element={<Reach />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

function Missing() {
  return (
    <div className="layout">
      <p className="kicker">Missing</p>
      <div>
        <h2 className="page-title">That page is not on this site.</h2>
        <p>
          <Link to="/">Back to the work.</Link>
        </p>
      </div>
    </div>
  );
}
