import React from "react";
import ColorGroup from "./color-group";

//Sum all the values and return "ColorList"
function ColorList(props) {
  return (
    <div className="row">
      <div className="shortcut-wrap">
        <ul className="shortcut-menus">{props.allColor.map(renderSample)}</ul>
      </div>
      {props.allColor.map(renderColor)}
    </div>
  );
}

//Take a "name" from "AllColor" and give it to ColorSample
function renderSample(sample) {
  return <ColorSample sampleName={sample.name}></ColorSample>;
}
//Give "AllColor" to ColorGroup
function renderColor(color) {
  return <ColorGroup name={color.name} colorsChip={color.chips}></ColorGroup>;
}
//Make each shortcut "<li>"
function ColorSample(props) {
  console.log(props);
  var aClass = "shortcut " + props.sampleName;
  return (
    <li>
      <a className={aClass}>{props.sampleName}</a>
    </li>
  );
}

export default ColorList;
