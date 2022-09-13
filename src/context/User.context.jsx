import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../Utils/Firebase/Firebase";

export const Usercontext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const Userprovider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((u) => {
      setCurrentUser(u);
    });
    return unsubscribe;
  });
  return <Usercontext.Provider value={value}>{children}</Usercontext.Provider>;
};
