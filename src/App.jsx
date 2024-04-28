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
      <main className="min-h-[500px] max-w-[1280px] mx-auto w-[90vw] mb-10">
        <Outlet></Outlet>
      </main>
      <footer className="border-y-2 border-black">
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
