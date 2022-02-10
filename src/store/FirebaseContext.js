import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import db, { auth } from "../Firebase/Config";
import firebase from "firebase/compat/app";
import Loading from "../Components/Loading/Loading";

export const UserContext = createContext(null);
export const AuthContext = createContext(null);

export default function Context({ children }) {
  const [user, setUser] = useState();
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    console.log("fuck you", user);
    if (user) {
      setShowLoading(true)
      db.collection("users")
        .where("uid", "==", user.uid)
        .get()
        .then((data) => {
          let userData = [];

          data.forEach((doc) => {
            userData.push(doc.data());
          });
          setUserDetails(userData[0]);
          setStatus(userData[0].status);
          setShowLoading(false) 
        });
    }
  }, [user]);
  const [status, setStatus] = useState();
  const [showLoading, setShowLoading] = useState();
  return (
    <AuthContext.Provider
      value={{ user, setUser, userDetails, status, setStatus }}
    >
      {showLoading && <Loading />}
      {children}
    </AuthContext.Provider>
  );
}
