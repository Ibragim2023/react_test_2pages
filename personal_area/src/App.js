import "./App.css";
import NavMenu from "./components/NavMenu/NavMenu";
import Logo from "./components/Logo/Logo";
import Authorization from "./pages/Authorization/Authorization";
import Contacts from "./pages/Contacts/Contacts";
import MainMenu from "./pages/MainMenu/MainMenu";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <Logo />
        </div>
        <nav className="menu">
          <NavMenu />
        </nav>
      </header>
      <div className="content">
        <Routes>
          <Route path="/" element={<MainMenu />}></Route>
          <Route path="auth" element={<Authorization />}></Route>
          <Route path="contacts" element={<Contacts />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
