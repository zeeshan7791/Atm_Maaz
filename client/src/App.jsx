import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import PrivateRoute from "./components/PrivateRoute";
import BankInfo from "./pages/BankInfo";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route element={<PrivateRoute />}>
          <Route path="/bank-info" element={<BankInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
