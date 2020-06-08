import React from "react";

function ColorGroup(props) {
  return (
    <section className="color-group" id={props.name}>
      <h3 className="color-title">{props.name}</h3>
      <div className="color-chips-wrap">
        {/* {console.log(props)} */}
        <ColorChips name={props.name} chips={props.colorsChip}></ColorChips>
      </div>
    </section>
  );
}

function ColorChips(props) {
  return (
    <div className="color-chips">
      {console.log(props)}
      <ColorChip name={props.name} chips={props.chips}></ColorChip>
    </div>
  );
}

function ColorChip(props) {
  return (
    <div className="color-chip">
      <div className="color-chip-bg">{props.id}</div>
      <div className="color-name">{props.id}</div>
      <input
        className="color-hex"
        type="text"
        readOnly
        value={props.chips.chip1}
      />
    </div>
  );
}

export default ColorGroup;