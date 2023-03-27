import "./App.css";
import LoginForm from "./components/common/LoginForm";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignupForm from "./components/common/SignupForm";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
     
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/homepage" element={<HomePage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
