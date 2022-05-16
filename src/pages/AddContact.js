import { useState } from "react";
import styled from "styled-components";
import Input from "../components/Input";

import { useAppContext } from "../context/AppContext";
const AddContact = () => {
  const { isAddingContact } = useAppContext();
  const [newContact, setNewContact] = useState({
    name: "",
    number: "",
    address: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewContact({ ...newContact, [name]: value });
  };
  const { addContact } = useAppContext();
  return (
    <Container isAddingContact={isAddingContact}>
      <div className="center__box">
        <h1 className="title">New Contact</h1>
        <div className="title-underline"></div>
        <Input
          label="name"
          name="name"
          value={newContact.name}
          placeholder="enter name"
          handleChange={handleChange}
        />
        <Input
          label="number"
          name="number"
          value={newContact.number}
          placeholder="enter number"
          handleChange={handleChange}
        />
        <Input
          label="address"
          name="address"
          value={newContact.address}
          placeholder="enter address"
          handleChange={handleChange}
        />
        <div className="buttons">
          <button className="btn" onClick={() => setNewContact({})}>
            clear contact
          </button>
          <button className="btn " onClick={() => addContact(newContact)}>
            Add contact
          </button>
        </div>
      </div>
    </Container>
  );
};

export default AddContact;
const Container = styled.div`
  display: ${({ isAddingContact }) => (isAddingContact ? "flex" : "none")};
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 2;
  .center__box {
    margin: auto;
    width: 80%;
    max-width: var(--fixed-width);
    border: 2px solid var(--primary-900);
    border-radius: var(--borderRadius);
    padding: 1rem;
    background-color: var(--grey-200);
  }
`;
