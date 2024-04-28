import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-yellow font-bold  ">
      <h2 className="text-center text-4xl font-bold border-b-2 border-black py-3 mb-2">
        Tourify
      </h2>
      <div className=" border-b-2 border-black py-3">
        <div className="w-[350px]  mx-auto ">
          <p className="text-center font-bold">
            Get our latest travel tips, destination highlights, and exclusive
            deals by subscribing to our{" "}
            <span className="text-2xl bg-black text-white px-2">
              newsletter!
            </span>
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex justify-center mt-2 text-xl"
          >
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs rounded-l-full focus:outline-none"
            />
            <button className="px-4 py-1 rounded-r-full button">Submit</button>
          </form>
        </div>
      </div>
      <div className="flex justify-center gap-5 text-4xl border-b-2 border-black py-3">
        <a href="#">
          <FaFacebook />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaXTwitter />
        </a>
      </div>
      <div className="flex justify-center border-b-2 border-black pb-3 mb-2 font-bold">
        <div>
          <p className="text-xl ">contact info : </p>
          <p>
            email : <span className="font-bold">tourify@gmail.com</span>
          </p>
        </div>
      </div>
      <p className="text-center text-lg font-bold pb-3  ">
        &copy;{"2024 Tourify Ltd. All rights reserved."}
      </p>
    </div>
  );
};

export default Footer;
