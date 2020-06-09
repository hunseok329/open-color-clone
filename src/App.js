import React from "react";
import ColorNav from "./component/navigation/nav";
import ColorTitle from "./component/title/color-title";
import ColorList from "./component/colorChips/color-list";

function App() {
  return (
    <div>
      <ColorNav></ColorNav>
      <ColorTitle></ColorTitle>
      <ColorList allColor={AllColor}></ColorList>
    </div>
  );
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
  {
    name: "Grape",
    chips: {
      chip0: "#f8f0fc",
      chip1: "#f3d9fa",
      chip2: "#eebefa",
      chip3: "#e599f7",
      chip4: "#da77f2",
      chip5: "#cc5de8",
      chip6: "#be4bdb",
      chip7: "#ae3ec9",
      chip8: "#9c36b5",
      chip9: "#862e9c",
    },
  },
  {
    name: "Violet",
    chips: {
      chip0: "#f3f0ff",
      chip1: "#e5dbff",
      chip2: "#d0bfff",
      chip3: "#b197fc",
      chip4: "#9775fa",
      chip5: "#845ef7",
      chip6: "#7950f2",
      chip7: "#7048e8",
      chip8: "#6741d9",
      chip9: "#5f3dc4",
    },
  },
  {
    name: "Indigo",
    chips: {
      chip0: "#edf2ff",
      chip1: "#dbe4ff",
      chip2: "#bac8ff",
      chip3: "#91a7ff",
      chip4: "#748ffc",
      chip5: "#5c7cfa",
      chip6: "#4c6ef5",
      chip7: "#4263eb",
      chip8: "#3b5bdb",
      chip9: "#364fc7",
    },
  },
  {
    name: "Blue",
    chips: {
      chip0: "#e7f5ff",
      chip1: "#d0ebff",
      chip2: "#a5d8ff",
      chip3: "#74c0fc",
      chip4: "#4dabf7",
      chip5: "#339af0",
      chip6: "#228be6",
      chip7: "#1c7ed6",
      chip8: "#1971c2",
      chip9: "#1864ab",
    },
  },
  {
    name: "Cyan",
    chips: {
      chip0: "#e3fafc",
      chip1: "#c5f6fa",
      chip2: "#99e9f2",
      chip3: "#66d9e8",
      chip4: "#3bc9db",
      chip5: "#22b8cf",
      chip6: "#15aabf",
      chip7: "#1098ad",
      chip8: "#0c8599",
      chip9: "#0b7285",
    },
  },
  {
    name: "Teal",
    chips: {
      chip0: "#e6fcf5",
      chip1: "#c3fae8",
      chip2: "#96f2d7",
      chip3: "#63e6be",
      chip4: "#38d9a9",
      chip5: "#20c997",
      chip6: "#12b886",
      chip7: "#0ca678",
      chip8: "#099268",
      chip9: "#087f5b",
    },
  },
  {
    name: "Green",
    chips: {
      chip0: "#ebfbee",
      chip1: "#d3f9d8",
      chip2: "#b2f2bb",
      chip3: "#8ce99a",
      chip4: "#69db7c",
      chip5: "#51cf66",
      chip6: "#40c057",
      chip7: "#37b24d",
      chip8: "#2f9e44",
      chip9: "#2b8a3e",
    },
  },
  {
    name: "Lime",
    chips: {
      chip0: "#f4fce3",
      chip1: "#e9fac8",
      chip2: "#d8f5a2",
      chip3: "#c0eb75",
      chip4: "#a9e34b",
      chip5: "#94d82d",
      chip6: "#82c91e",
      chip7: "#74b816",
      chip8: "#66a80f",
      chip9: "#5c940d",
    },
  },
  {
    name: "Yellow",
    chips: {
      chip0: "#fff9db",
      chip1: "#fff3bf",
      chip2: "#ffec99",
      chip3: "#ffe066",
      chip4: "#ffd43b",
      chip5: "#fcc419",
      chip6: "#fab005",
      chip7: "#f59f00",
      chip8: "#f08c00",
      chip9: "#e67700",
    },
  },
  {
    name: "Orange",
    chips: {
      chip0: "#fff4e6",
      chip1: "#ffe8cc",
      chip2: "#ffd8a8",
      chip3: "#ffc078",
      chip4: "#ffa94d",
      chip5: "#ff922b",
      chip6: "#fd7e14",
      chip7: "#f76707",
      chip8: "#e8590c",
      chip9: "#d9480f",
    },
  },
];

export default App;
