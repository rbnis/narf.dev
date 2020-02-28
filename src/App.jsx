import React from "react";
import styled from "styled-components";

import Quote from "./components/Quote";
import Character from "./components/Character";

import Pinky from "./assets/pinky.svg";
const Phrases = [
  "Narf!",
  "Zort!",
  "Poit!",
  "Troz!",
  "Egad!",
  "Fort!",
  "Gee, Brain, what do you want to do tonight?",
  "I know! We can get everyone to go on a diet!",
  "Do sealions eat seazebras?",
  "You are going to be a help this time.",
  "When does this scene start to animate, Brainie?",
  "Oooh, a fort! FORT! Oh, can we play Cowboys and Indians?",
  "What's free-market capitalism?",
  "Egad! There's a human version of you? Scary!"
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  height: 100%;
  width: 100%;
  max-width: 530px;
  padding: 40px;
`;

class App extends React.Component {
  render () {
    const Phrase = Phrases[Math.floor(Math.random() * Phrases.length)];

    return (
      <Wrapper>
        <Quote Phrase={Phrase} />
        <Character Character={Pinky} />
      </Wrapper>
    )
  }
}

export default App;
