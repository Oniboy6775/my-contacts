import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import { ADD_CONTACT, REMOVE_CONTACT, TOGGLE_ADD_CONTACT } from "./actions";
const Context = React.createContext();
let oldContacts = localStorage.getItem("myContacts");
oldContacts = JSON.parse(oldContacts);
const initialState = {
  isAddingContact: false,
  isEditing: false,
  myContacts: oldContacts ? oldContacts : [],
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const toggleAddContact = () => {
    dispatch({ type: TOGGLE_ADD_CONTACT });
  };

  const addContact = (payload) => {
    const { name, address, number } = payload;
    if (!name || !address || !number) return alert("Provide all values");
    const newId = state.myContacts.length + 1;
    const newList = JSON.stringify(
      state.myContacts.concat({ ...payload, id: newId })
    );
    localStorage.setItem("myContacts", newList);
    dispatch({ type: ADD_CONTACT, payload: { ...payload, id: newId } });
  };
  const removeContact = (id) => {
    const remainingContacts = state.myContacts.filter((e) => e.id !== id);
    const newList = JSON.stringify(remainingContacts);
    localStorage.setItem("myContacts", newList);
    dispatch({ type: REMOVE_CONTACT, payload: remainingContacts });
  };
  return (
    <Context.Provider
      value={{ ...state, addContact, removeContact, toggleAddContact }}
    >
      {children}
    </Context.Provider>
  );
};
const useAppContext = () => {
  return useContext(Context);
};
export { AppProvider, useAppContext, initialState };
