import { ListWrapper, Title, Container } from "../styles";
import ThingItem from "./ThingItem";

import { Link } from "react-router-dom";

import { AddButtonStyled } from "../styles";
import { useState } from "react";

const TreasureList = ({ treasures }) => {
  const treasureList = treasures.map((treasure) => (
    <ThingItem treasure={treasure} key={treasure.id} />
  ));
  return (
    <div>
      <Title>Treasure</Title>
      <Link to="/treasures/">
        {/* <AddButtonStyled> treasure</AddButtonStyled> */}
      </Link>
      <div>
        <ListWrapper>{treasureList}</ListWrapper>
      </div>
    </div>
  );
};

export default TreasureList;
