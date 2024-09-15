import { createContext } from "react";

export const NavbarContext = createContext<boolean>(false);
export const NavbarContextProvider = NavbarContext.Provider;
