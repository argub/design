import { useState, useEffect } from "react";
import List from "./Lists";
import Form from "../Form";
import "./contacts.css";

function Contacts() {
  const [contact, setContact] = useState([
    {
      fullname: "Burak",
      phoneNumber: "523 345 11 55",
    },
    
    
    {
      fullname: "Melih",
      phoneNumber: "501 212 55 55",
    },
    {
      fullname: "Selin",
      phoneNumber: "502 111 55 55",
    },
    {
      fullname: "Cenk",
      phoneNumber: "503 444 11 55",
    },
  ]);
  useEffect(() => {
    console.log(contact);
  }, [contact]);
  return (
    <div id="contacts-app">
      <div className="creator">  
        <a target="_blank" href="https://github.com/argub">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/bugracicioglu/">
          Linkedin
        </a>
      </div>
      <div target="_blank" className="app-title">
        <h1>Contacts App</h1>
      </div>
      <List contacts={contact} />
      <Form addForm={setContact} contact={contact} />
    </div>
  );
}

export default Contacts;