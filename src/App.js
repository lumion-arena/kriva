import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Designer from "./pages/Designer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/designer" element={<Designer />} />
      </Routes>
    </Router>
  );
}

export default App;
