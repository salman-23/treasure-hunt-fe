import { ListWrapper, Title, Container } from "../styles";
import ThingItem from "./ThingItem";

import { Link } from "react-router-dom";

import { AddButtonStyled } from "../styles";
import { useState } from "react";
const TreasureList= ({ things }) => {
  const thingList = things
  .filter((thing)=>thing.isTreasure==true)
  .map((thing) => (
    <ThingItem thing={thing} key={thing.id} />
  ));
  console.log(thingList);
  return (
    <div>
      <Title>Treasure</Title>
      <Link to="/things/">
        {/* <AddButtonStyled> thing</AddButtonStyled> */}
      </Link>
      <div>
        <ListWrapper>{thingList}</ListWrapper>
      </div>
    </div>
  );
};

export default TreasureList;
