import React from "react";

//Make a standard color table
function ColorGroup(props) {
  return (
    <section className="color-wrap">
      <section className="color-group" id={props.name}>
        <h3 className="color-title">{props.name}</h3>
        <div className="color-chips-wrap">
          <ColorChips name={props.name} chips={props.colorsChip}></ColorChips>
        </div>
      </section>
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
    var cc = props.name + " " + String(i);
    var ccb = "color-chip-bg " + ("bg-" + cc);
    contnet.push(
      <div className="color-chip" id={cc}>
        <div className={ccb}></div>
        <div className="color-name">{cc}</div>
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

export default ColorGroup;
