import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import db, { auth } from "../Firebase/Config";

export const UserContext = createContext(null);
export const AuthContext = createContext(null);

export default function Context({ children }) {
  const [user, setUser] = useState("");
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    db.collection("users")
      .where("uid", "==", "DfezvTR6UVPjBkz68d9AKZHsaUv2")
      .get()
      .then((data) => {
        let userData = [];

        data.forEach((doc) => {
          userData.push(doc.data());
        });
        setUserDetails(userData[0]);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, userDetails }}>
      {children}
    </AuthContext.Provider>
  );
}
