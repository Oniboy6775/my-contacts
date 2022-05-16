import { ADD_CONTACT, REMOVE_CONTACT, TOGGLE_ADD_CONTACT } from "./actions";
const reducer = (state, action) => {
  if (action.type === TOGGLE_ADD_CONTACT)
    return {
      ...state,
      isAddingContact: !state.isAddingContact,
    };
  if (action.type === ADD_CONTACT) {
    const { myContacts } = state;
    return {
      ...state,
      myContacts: myContacts.concat(action.payload),
      isAddingContact: false,
    };
  }
  if (action.type === REMOVE_CONTACT) {
    return {
      ...state,
      myContacts: action.payload,
      isAddingContact: false,
    };
  }

  return state;
};
export default reducer;
