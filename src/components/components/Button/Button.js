import React from "react";

function Button({ handleCurrentWishes, wish }) {
  return (
    <button className="button" onClick={() => handleCurrentWishes(wish)}>
      remove
    </button>
  );
}

export default Button;
