import { Routes, Route, Link } from "react-router-dom";
import Heading from "./components/layout/heading";
import Home from "./routes/home";
import About from "./routes/about";
import Contact from "./routes/contact";
import Todo from "./routes/todo";

function App() {
  return (
    <div>
      <nav>
        <Link to="/home">home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/todo">Todo</Link>
        <hr />
      </nav>
      <br />
      <main>
        <Routes>
          <Route path="/" element={<Heading />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
