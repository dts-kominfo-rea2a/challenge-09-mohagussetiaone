// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = ({ data }) => {
  return (
    <div className="contacts">
      <img className="photo" src={data.photo} alt="foto"></img>
      <h3>{data.name}</h3>
      <p>{data.phone}</p>
      <p>{data.email}</p>
    </div>
  );
};

export default Contact;
