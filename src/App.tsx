import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Main from "./components/Main";
import Info from "./components/Info";
import Events from "./components/Events";

function AppContent() {
  return (
    <Router>
      <div className="centered">
        <TopBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/info" element={<Info />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
}

export default function App() {
  return <AppContent />;
}
