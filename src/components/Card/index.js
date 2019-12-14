import React from "react";
import "./style.css";


//create card method for export, pass in props from App.js
const Card = props => {
  return (
    <div //When clicked, pass the specific id(card) into the click count function
      className="card" onClick={() => props.selectCard(props.id)}>

      <div className="imageContainer">
        <img
          //image source pulls from the json, and alt attaches name from json
          src={props.image} alt={props.name} id={props.id} />
      </div>

    </div>
  );
};

//export for use in app.js
export default Card;