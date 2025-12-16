import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");

  // Registration
  const register = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  //   Login
  const login = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  //   Google signIn
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  console.log(user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //   for roll-based user
  useEffect(() => {
    if (!user) return;
    axios.get(`http://localhost:3000/users/role/${user.email}`).then((res) => {
      setRole(res.data.role);
    });
  }, [user]);

  console.log(role);

  const authData = {
    register,
    user,
    setUser,
    login,
    googleSignIn,
    loading,
    setLoading,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
