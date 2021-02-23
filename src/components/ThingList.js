import { ListWrapper, Title, Container } from "../styles";
import ThingItem from "./ThingItem";

import { Link } from "react-router-dom";

import { AddButtonStyled } from "../styles";
import { useState } from "react";
const ThingsList = ({ things }) => {
  const thingList = things
  .filter((thing)=>thing.isTreasure==false)
  .map((thing) => (
    <ThingItem thing={thing} key={thing.id} />
  ));
  return (
    <div>
      <Title>Thing</Title>
      <Link to="/things/">
        {/* <AddButtonStyled> thing</AddButtonStyled> */}
      </Link>
      <div>
        <ListWrapper>{thingList}</ListWrapper>
      </div>
    </div>
  );
};

export default ThingsList;
