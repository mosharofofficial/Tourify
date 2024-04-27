import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

function App() {
  return (
    <>
      <header className="">
        <nav className=" bg-yellow border-b-2 border-black">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="min-h-[500px] ">
        <Outlet></Outlet>
      </main>
      <footer className="border-t-2 border-black">
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
