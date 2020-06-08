import React from "react";
import ColorGroup from "./color-group";

function ColorList() {
  return <section className="color-wrap">{AllColor.map(renderColor)}</section>;
}

function renderColor(color) {
  console.log(color);
  return <ColorGroup name={color.name} colorsChip={color.chips}></ColorGroup>;
}
const AllColor = [
  {
    name: "gray",
    chips: {
      chip0: "#f8f9fa",
      chip1: "#f1f3f5",
      chip2: "#e9ecef",
      chip3: "#dee2e6",
      chip4: "#ced4da",
      chip5: "#adb5bd",
      chip6: "#868e96",
      chip7: "#495057",
      chip8: "#343a40",
      chip9: "#212529",
    },
  },
  {
    name: "red",
    chips: {
      chip0: "#fff5f5",
      chip1: "#ffe3e3",
      chip2: "#ffc9c9",
      chip3: "#ffa8a8",
      chip4: "#ff8787",
      chip5: "#ff6b6b",
      chip6: "#fa5252",
      chip7: "#f03e3e",
      chip8: "#e03131",
      chip9: "#c92a2a",
    },
  },
  {
    name: "pink",
    chips: {
      chip0: "#fff0f6",
      chip1: "#ffdeeb",
      chip2: "#fcc2d7",
      chip3: "#faa2c1",
      chip4: "#f783ac",
      chip5: "#f06595",
      chip6: "#e64980",
      chip7: "#d6336c",
      chip8: "#c2255c",
      chip9: "#a61e4d",
    },
  },
];
export default ColorList;
