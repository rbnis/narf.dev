import React from "react";
import styled from "styled-components";

const CharacterImage = styled.img`
  width: 100%;
  max-width: 550px;
  max-height: 100%;
  position: relative;
`;

function Character(props) {
  return (
    <CharacterImage src={props.Character} />
  );
}

export default Character;
