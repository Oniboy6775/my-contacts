import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const Context = React.createContext();
const oldContacts = localStorage.getItem("myContacts");
const initialState = {
  myContacts: oldContacts ? oldContacts : [],
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Context.Provider value={{ ...state }}>{children}</Context.Provider>;
};
const useAppContext = () => {
  return useContext(Context);
};
export { AppProvider, useAppContext, initialState };
