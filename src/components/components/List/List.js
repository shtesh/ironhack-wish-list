import React from "react";
import ListItem from "../ListItem/ListItem";
import Button from "../Button/Button";

let id = 0;

function List({ wishes, handleCurrentWishes }) {
  return wishes.map((wish) => {
    return (
      <div>
        <ListItem wish={wish} />
        <Button wish={wish} handleCurrentWishes={handleCurrentWishes}>
          remove
        </Button>
      </div>
    );
  });
}

export default List;
