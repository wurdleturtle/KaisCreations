import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Main from "./components/Main";

function AppContent() {
  return (
    <Router>
      <div className="centered">
        <TopBar />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default function App() {
  return <AppContent />;
}
