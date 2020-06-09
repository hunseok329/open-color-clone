import React from "react";

function ColorSample(props) {
  console.log(props);
  var aClass = "shortcut " + props.sampleName;
  return (
    <li>
      <a className={aClass}>{props.sampleName}</a>
    </li>
  );
}

export default ColorSample;
