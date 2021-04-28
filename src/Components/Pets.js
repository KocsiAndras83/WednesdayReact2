import React, { useState } from "react";
import "../../src/App.css";

const Pets = ({ pet, fetchData }) => {
  const [buttonText, setButtonText] = useState(true);

  const myFetch = () => {
    fetch("api/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: pet.name, isVaccinated: !pet.isVaccinated }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setButtonText(true);
      });
    fetchData();
  };

  const handleClick = () => {
    setButtonText(false);
    myFetch();
  };

  return (
    <div className="Pet">
      <p>
        {pet.name} - Vaccinated:{" "}
        <button onClick={() => handleClick()}>
          {buttonText ? pet.isVaccinated.toString() : "..."}
        </button>
      </p>
    </div>
  );
};

export default Pets;
