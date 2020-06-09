import React from "react";
import ColorGroup from "./color-group";

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
function renderSample(sample) {
  return <ColorSample sampleName={sample.name}></ColorSample>;
}
function renderColor(color) {
  return <ColorGroup name={color.name} colorsChip={color.chips}></ColorGroup>;
}

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
