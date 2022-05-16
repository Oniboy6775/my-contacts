import { useAppContext } from "../context/AppContext";
import Wrapper from "../wrappers/Landing";
import { FcManager } from "react-icons/fc";
import { GrView } from "react-icons/gr";
import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useState } from "react";
import AddContact from "./AddContact";
import Input from "../components/Input";
const Landing = () => {
  const { myContacts, removeContact, toggleAddContact } = useAppContext();

  return (
    <Wrapper>
      <AddContact />
      <div className="contacts__box">
        <h3 className="title">My contacts</h3>
        <div className="title-underline"></div>
        <div className="search__box">
          <input
            className="form-input"
            type="text"
            placeholder="search contact"
          />

          <button
            className=" btn add__contact__btn btn"
            onClick={() => toggleAddContact()}
          >
            <BsFillPlusCircleFill /> Add new Contact
          </button>
        </div>
        <div className="contact__list">
          {myContacts.length > 0 ? (
            myContacts.map((contact, index) => {
              const { name, number, address, id } = contact;
              return (
                <div key={index} className="each__contact">
                  <div className="contact__info">
                    <div className="avatar">
                      <FcManager />
                    </div>
                    <div className="contact__details">
                      <p className="contact__name">{name}</p>
                      <div className="contact__number">
                        <p>{number}</p>
                      </div>
                    </div>
                  </div>

                  <div className="buttons">
                    <button className="btn edit__btn ">
                      {" "}
                      <BiEditAlt /> Edit
                    </button>
                    <button className="btn view__btn">
                      <GrView />
                      View
                    </button>
                    <button
                      className="btn delete__btn"
                      onClick={() => removeContact(id)}
                    >
                      <MdDelete />
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <h1 className="title no__contact">
              No contact saved. Click to add contact
            </h1>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
