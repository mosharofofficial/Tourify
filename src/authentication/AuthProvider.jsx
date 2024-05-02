import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { auth } from "../../firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GithubAuthProvider,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";

export const authContext = createContext(null);





const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const githubLogin = () => {
    setLoading(false);
    return signInWithPopup(auth, githubProvider);
  };

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleLogin = () => {
    setLoading(false);

    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    setLoading(false);

      // console.log(user?.providerData?.displayName);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const register = (email, password) => {
    setLoading(false);

    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(false);

    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {

    return signOut(auth);
  };

  const update = (name, photo) => {
    setLoading(false);

    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const provide = {
    user,
    register,
    login,
    githubLogin,
    googleLogin,
    logout,
    update,
    loading,
    setLoading
  };

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
