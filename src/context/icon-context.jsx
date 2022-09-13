import { createContext, useState } from "react";

export const IconContext = createContext({
  click: false,
  setClick: () => null,
});

export const IconProvider = ({ children }) => {
  const [click, setClick] = useState(false);
  const value = { click, setClick };
  return <IconContext.Provider value={value}>{children}</IconContext.Provider>;
};
