import React from "react";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import ListItem from "./components/ListItem/ListItem";

const initialState = ["Sleep"];
function App() {
  const [wishes, setWishes] = React.useState(initialState); // wishes actualizado envía a list

  function handleWish(newWish) {
    setWishes(wishes.concat(newWish));
  }

  function handleCurrentWishes(wishToDelete) {
    let filteredWishes = wishes.filter((wish) => wish !== wishToDelete);
    setWishes(filteredWishes);
  }

  return (
    <div className="container">
      <h1>App</h1>
      <div className="cards-container">
        <List wishes={wishes} handleCurrentWishes={handleCurrentWishes} />
      </div>
      <Form handleWish={handleWish} />
    </div>
  );
}
export default App;
