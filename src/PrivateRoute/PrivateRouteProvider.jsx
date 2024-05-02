import PropTypes from "prop-types";
import { useContext } from "react";
import { authContext } from "../authentication/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouteProvider = ({ children }) => {

  const {pathname} = useLocation();

    const {user, loading} = useContext(authContext);
    // console.log(pathname);

    if(loading){
      return (
        <div className="flex items-center justify-center h-[500px]">
          <span className="loading loading-infinity loading-lg"></span>
          <span className="loading loading-infinity loading-lg"></span>
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      );
    }

    if (user) {
         return <>{children}</>
    }
    else {
        return <Navigate state={pathname} to={'/login'}></Navigate>
    }
 
};

PrivateRouteProvider.propTypes = {
  children: PropTypes.node,
};

export default PrivateRouteProvider;
