import React from "react";
import AddToCart from "./AddToCart";
import { withContext } from "../../AppContext";
import MensCard from "./MensCard";

const MensList = props => {
  const mensItems = props.mensItems.map(mensItem => {
    return (
      <MensCard
        key={mensItem._Id}
        name={mensItem.name}
        key={mensItem.otherthing}
        key={mensItem.otherthing}
      />
    );
  });
};
