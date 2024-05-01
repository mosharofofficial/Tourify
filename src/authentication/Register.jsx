import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { authContext } from "./AuthProvider";
import userImg from "../assets/user.png";
import { validate } from "./util";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const {user, register, update } = useContext(authContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    const name = form.name.value;
    const imageLinkIsValid =
      photoUrl.includes(".jpg") || photoUrl.includes(".png");
    const wrongPassword = validate(password);

    if (!wrongPassword) {
      // console.log(`email : ${email} | password : ${password}`);
      register(email, password)
        .then((res) => {
          console.log(
            `registered with this email:  ${res.user.email} , name : ${name}, password: ${password}, photoURL : ${photoUrl}`
          );
          update(name, (imageLinkIsValid && photoUrl) || userImg)
            .then(() => {
              const userDetails = {
                email,
                name,
                userList: [],
              };

              fetch(`http://localhost:5000/users`, {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(userDetails),
              });

              toast.success("Registered successfully!", {
                position: "top-right",
                autoClose: 750,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              return null;
            })
            .then(() => {
              setTimeout(() => navigate("/"), 1500);
              setTimeout(() => location.reload(), 1650);
            })
            .catch((e) => console.log(e.message));
        })
        .catch((e) => console.log(e.message));
    } else {
      toast.error(wrongPassword, {
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
  };

  if (!user) {
    return (
      <div className=" flex items-center justify-center h-[500px]">
        <div className="bg-yellow  p-3 sm:p-10  rounded-xl border-2 border-black ">
          <h1 className="text-center pb-5 text-3xl font-bold">Register</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-1 ">
            <label className=" bg-black text-white font-bold input input-bordered flex items-center gap-2">
              Name :
              <input name="name" type="text" required className=" grow " />
            </label>
            <label className=" bg-black text-white font-bold input input-bordered flex items-center gap-2">
              Email :
              <input name="email" type="email" required className=" grow " />
            </label>
            <label className=" bg-black text-white font-bold input input-bordered flex items-center gap-2">
              Photo URL :
              <input name="photoUrl" type="text" className=" grow " />
            </label>
            <label className=" bg-black text-white font-bold input input-bordered flex items-center gap-2">
              Password :
              <input
                name="password"
                type="password"
                required
                className=" grow "
              />
            </label>
            <button className="button  py-2 mt-2" type="submit">
              Register
            </button>
          </form>

          <Link to={"/login"}>
            <p className="mt-5">
              Have an account?{" "}
              <span className=" bg-black text-white py-[1px]  px-2">Login</span>
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

export default Register;
