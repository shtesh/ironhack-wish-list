import React from "react";

let id = 0;

function ListItem({ wish }) {
  return (
    <div className="card">
      <p key={id++}>{wish}</p>
    </div>
  );
}

export default ListItem;
