import { BsRobot } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {

    const navigate = useNavigate();
    
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center gap-3 bg-yellow">
      <span className="text-8xl">
        <BsRobot />
      </span>
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-2xl mb-4 font-bold">Page Not Found</h1>
        <button onClick={()=>navigate('/')} className="button text-2xl">Go Back</button>
      </div>
    </div>
  );
};

export default ErrorPage;
