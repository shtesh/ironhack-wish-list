import React from "react";
import ListItem from "../ListItem/ListItem";

function List({ wishes, onClick }) {
  console.log("List wishes", wishes);
  return (
    <div>
      {wishes.map((wish, idx) => (
        <ListItem key={idx} data={wish} onRemove={onClick} />
      ))}
    </div>
  );
}

export default List;
