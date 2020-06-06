import React from "react";

function ColorGroup(props) {
  return (
    <section class="color-group" id={props.name}>
      <h3 class="color-title">{props.name}</h3>
      <div class="color-chips-wrap"></div>
    </section>
  );
}

export default ColorGroup;
