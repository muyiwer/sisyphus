import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/pages/dashboard";
import { Login } from "./components/pages/login";
import "./sass/main.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
