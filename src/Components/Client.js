import React, { useState } from "react";
import "../../src/App.css";
import Pets from "./Pets";

const Client = ({ client, fetchData }) => {
  return (
    <div className="Client">
      <p>{client.name}</p>
      {client.pets.map((pet, i) => (
        <Pets key={i} pet={pet} fetchData={fetchData} />
      ))}
    </div>
  );
};

export default Client;
