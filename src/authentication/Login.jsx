import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "./AuthProvider";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { signInWithPopup } from "firebase/auth";
// import { auth } from "../../firebase.config";
// import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { user, login, githubLogin, googleLogin } = useContext(authContext);

  const { state } = useLocation();

  const navigate = useNavigate();

  const goto = state || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then(() => {
        toast.success("Logged in successfully !", {
          position: "top-right",
          autoClose: 750,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .then(() => navigate(goto))
      .catch((e) => {
        if (e.code === "auth/invalid-credential") {
          toast.error("invalid credentials !", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => res.user)
      .then((user) => {
        console.log(user);
        const email = user.email;

        const name = user.displayName;

        console.log(email);
        console.log(name);

        const userDetails = {
          email,
          name,
          userList: [],
        };

        fetch(`http://localhost:5000/users`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userDetails),
        })
          .then((res) => console.log(res))
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((res) => res.user)
      .then((user) => {
        console.log(user);
        const email = user.email;

        const name = user.displayName;

        console.log(email);
        console.log(name);

        const userDetails = {
          email,
          name,
          userList: [],
        };

        fetch(`http://localhost:5000/users`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userDetails),
        })
          .then((res) => console.log(res))
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  };

  if (!user) {
    return (
      <div className=" flex items-center justify-center h-[500px]">
        <div className="bg-yellow p-4 sm:p-10 rounded-xl border-2 border-black ">
          <h1 className="text-center pb-5 text-3xl font-bold">Login</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-1 ">
            <label className=" bg-black text-white font-bold input input-bordered flex items-center gap-2">
              Email :
              <input name="email" type="email" className=" grow " />
            </label>
            <label className=" bg-black text-white font-bold input input-bordered flex items-center gap-2">
              Password :
              <input name="password" type="password" className=" grow " />
            </label>
            <button className="button  py-2 mt-2" type="submit">
              Login
            </button>
          </form>
          <div className="flex gap-1 py-2 mt-3 items-center">
            <h1 className="text-xl font-bold">Login with: </h1>
            <button onClick={handleGoogleLogin} className="button">
              Google
            </button>
            <button onClick={handleGithubLogin} className="button">
              Github
            </button>
          </div>
          <Link to={"/register"}>
            <p className="mt-5">
              Don&apos;t have an account?{" "}
              <span className=" bg-black text-white py-[1px]  px-2">
                Register
              </span>
            </p>
          </Link>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="light"
        />
      </div>
    );
  } else {
    return <Navigate to={"/"}></Navigate>;
  }
};

export default Login;
