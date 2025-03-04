import "./App.css";
import TopBar from "./components/TopBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="centered">
      <TopBar />
      <Routes>
        <Route path="/gambling" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
