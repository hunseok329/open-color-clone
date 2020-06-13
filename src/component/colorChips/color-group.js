import React from "react";
import styled from "styled-components";
import "./color-group.css";

//Make a standard color table
function ColorGroup(props) {
  console.log(props);
  return (
    <section className="color-group" id={props.name}>
      <h3 className="color-title">{props.name}</h3>
      <div className="color-chips-wrap">
        <ColorChips name={props.name} chips={props.colorsChip}></ColorChips>
      </div>
    </section>
  );
}

//Make color chips
function ColorChips(props) {
  return (
    <div className="color-chips">
      <ColorChip name={props.name} chips={props.chips}></ColorChip>
    </div>
  );
}

//Make one chip out of "ColorChips"
function ColorChip(props) {
  var contnet = [];
  for (let i = 0; i < 10; i++) {
    var cc = props.name + "-" + String(i);
    var ccb = "color-chip-bg " + ("bg-" + cc);
    contnet.push(
      <div className="color-chip" id={cc}>
        <Background className={ccb} color={props.chips[i]}></Background>
        <div className="color-name">{props.name + " " + i}</div>
        <input
          className="color-hex"
          type="text"
          readOnly
          value={props.chips[i]}
        ></input>
      </div>
    );
  }
  return contnet;
}

const Background = styled.div`
  height: 80px;
  background-color: ${(props) => props.color};
`;
export default ColorGroup;
