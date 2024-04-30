import PropTypes from "prop-types";
import { useContext } from "react";
import { authContext } from "../authentication/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouteProvider = ({ children }) => {

  const {pathname} = useLocation();

    const {user} = useContext(authContext);
    console.log(pathname);

    if (user) {
         return <>{children}</>;
    }
    else {
        return <Navigate state={pathname} to={'/login'}></Navigate>
    }
 
};

PrivateRouteProvider.propTypes = {
  children: PropTypes.node,
};

export default PrivateRouteProvider;
