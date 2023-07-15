import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChange,
  createUserDocFromAuth,
} from "../utlis/firebase.utlis";
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsub = onAuthStateChange((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      console.log(user);
      setCurrentUser(user);
    });
    return unsub;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
