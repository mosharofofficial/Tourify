import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { auth } from "./firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth/cordova";

export const authContext = createContext(null);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log(user?.providerData?.displayName);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const provide = { user, register, login, githubLogin, googleLogin };

  return (
    <div>
      <authContext.Provider value={provide}>{children}</authContext.Provider>
    </div>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
