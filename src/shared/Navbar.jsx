import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../authentication/AuthProvider";
import { Tooltip } from "react-tooltip";

// import PropTypes from "prop-types";

const Navbar = () => {
  const { user, logout } = useContext(authContext);

  const handleLogout = () => {
    logout().catch((e) => console.log(e.message));
  };

  const links = (
    <>
      <li className="">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="">
        <NavLink to={"/allSpots"}>All Tourist Spots</NavLink>
      </li>
      <li className="">
        <NavLink to={"/addSpot"}>Add Tourist Spot</NavLink>
      </li>
      <li className="">
        <NavLink to={"/myList"}>My List</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar min-w-[400px] max-w-[1280px] mx-auto customMd:w-[90vw] ">
      <div className="navbar-start">
        <div className="dropdown z-10">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-yellow rounded-box w-52 font-bold text-black gap-1  border-2 border-black"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"}>
          <div className="btn btn-ghost text-3xl">Tourify</div>
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 font-bold text-balck gap-1 ">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-1">
        {user ? (
          <>
            <a className="my-anchor-element">
              <img
                src={user.photoURL}
                className="size-10 bg-yellow rounded-full border-2 border-black"
              />
            </a>
            <Tooltip anchorSelect=".my-anchor-element" place="bottom">
              {user.displayName}
            </Tooltip>
            <button className="button text-xl" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <button className="button text-xl">Login</button>
            </Link>
            <Link to={"/register"}>
              <button className="button text-xl">Register</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

// Navbar.propTypes = {};

export default Navbar;
