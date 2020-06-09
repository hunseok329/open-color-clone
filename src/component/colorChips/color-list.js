import React from "react";
import ColorGroup from "./color-group";
import ColorSample from "./color-sample";

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

export default ColorList;
