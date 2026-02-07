import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Designer from "./pages/Designer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/designer" element={<Designer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
