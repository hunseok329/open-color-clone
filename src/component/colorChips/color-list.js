import React from "react";
import styled from "styled-components";
import ColorGroup from "./color-group";
import "./color-list.css";

//Sum all the values and return "ColorList"
function ColorList(props) {
  console.log(props);
  return (
    <div className="container">
      <div className="row">
        <div className="shortcut-wrap">
          <ul className="shortcut-menus">{props.allColor.map(renderSample)}</ul>
        </div>
        <section className="color-wrap">
          {/* Call color-group tag */}
          {props.allColor.map(renderColor)}
        </section>
      </div>
    </div>
  );
}

//Take a "name" from "AllColor" and give it to ColorSample
function renderSample(props) {
  return (
    <ColorSample sampleName={props.name} color={props.chips[7]}></ColorSample>
  );
}

//Give "AllColor" to ColorGroup
function renderColor(props) {
  return <ColorGroup name={props.name} colorsChip={props.chips}></ColorGroup>;
}

//Make each shortcut "<li>"
function ColorSample(props) {
  var aClass = "shortcut " + props.sampleName;
  var hre = "#" + props.sampleName;
  return (
    <li>
      <a className={aClass} href={hre}>
        <Span color={props.color}></Span>
        <Name hcolor={props.color}>{props.sampleName}</Name>
      </a>
    </li>
  );
}

const Span = styled.span`
  display: inline-block;
  margin-top: -2px;
  margin-right: 10px;
  width: 14px;
  height: 14px;
  border-radius: 4px;
  vertical-align: middle;
  background-color: ${(props) => props.color};
`;

const Name = styled.span`
  &:hover {
    color: ${(props) => props.hcolor};
  }
`;
export default ColorList;
