import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <Router>
      {/* this is the common element */}
      <nav>
        <Link to="/">Home </Link>
        <Link to="/about">about </Link>
        <Link to="/profile">profile </Link>
      </nav>

      {/* changing part */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* this way we specify params for the url, which we can retrieve with useParams hook */}
        <Route path="/profile/:username" element={<Profile />} />
        {/* error page has to be the last page */}
        <Route path="/*" element={<ErrorPage />} />
      </Routes>

      {/* footer could be here */}
      <footer>this is footer</footer>
    </Router>
  );
}

export default App;
