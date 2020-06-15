import React from "react";
import ColorData from "./allColorData";
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
const AllColor = ColorData();

export default App;
