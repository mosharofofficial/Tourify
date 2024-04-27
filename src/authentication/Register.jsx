import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className=" flex items-center justify-center h-[500px]">
      <div className="bg-yellow  p-10 rounded-xl border-2 border-black ">
        <h1 className="text-center pb-5 text-3xl font-bold">Login</h1>
        <form className="flex flex-col gap-1 ">
          <label className=" bg-black text-white font-bold input input-bordered flex items-center gap-2">
            Name :
            <input type="text" className=" grow " />
          </label>
          <label className=" bg-black text-white font-bold input input-bordered flex items-center gap-2">
            Email :
            <input type="email" className=" grow " />
          </label>
          <label className=" bg-black text-white font-bold input input-bordered flex items-center gap-2">
            Photo URL :
            <input type="email" className=" grow " />
          </label>
          <label className=" bg-black text-white font-bold input input-bordered flex items-center gap-2">
            Password :
            <input type="password" className=" grow " />
          </label>
        </form>

        <Link to={"/login"}>
          <p className="mt-5">
            Have an account?{" "}
            <span className=" bg-black text-white py-[1px]  px-2">Login</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
