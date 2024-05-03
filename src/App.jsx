import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { createContext, useState } from "react";

export const themeContext = createContext(1);

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggle = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <header className="">
        <nav className=" bg-yellow border-b-2 border-black">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="min-h-[500px] max-w-[1280px] mx-auto w-[90vw] mb-10 ">
        <themeContext.Provider value={{ isDark, setIsDark, toggle }}>
          <Outlet></Outlet>
        </themeContext.Provider>
      </main>
      <footer className="border-y-2 border-black">
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
