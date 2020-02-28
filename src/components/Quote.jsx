import React from "react";
import styled from "styled-components";

const Bubble = styled.blockquote`
  position: relative;
  text-align: center;
  color: #000;
  min-width: 250px;
  padding: 25px;
  background: linear-gradient(to bottom, rgb(127, 127, 213), rgb(134, 168, 231), rgb(145, 234, 228));
  font-size: 30px;
  border-radius: 25px;
  margin-bottom: 25px;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 120px;
    height: 0;
    width: 0;
    border: 60px solid transparent;
    border-top-color: rgb(145, 234, 228);
    border-bottom: 0;
    border-right: 0;
    margin-left: -30px;
    margin-bottom: -60px;
  }
`;

function Quote(props) {
  return(
    <Bubble>
      <p>{props.Phrase}</p>
    </Bubble>
  );
}

export default Quote;
