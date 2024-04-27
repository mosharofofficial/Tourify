import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";
import { useContext } from "react";
import AuthProvider, { authContext } from "./authentication/AuthProvider";
import Footer from "./shared/Footer";

function App() {
  return (
    <>
      <header>
        <nav className=" bg-yellow">
          <Navbar></Navbar>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
