import React from "react";
import List from "./components/List/List";
import ListItem from "./components/ListItem/ListItem";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";

const initialState = [];

function App() {
  const [wishes, setWishes] = React.useState(initialState);

  function handleWish(newWish) {
    setWishes(wishes.concat(newWish));
  }
  return (
    <div className="container">
      <h1>App</h1>
      <div className="cards-container">
        <List wishes={wishes} />
        <div className="card">
          <button className="button">remove</button>
        </div>
        <div className="card">
          <button className="button">remove</button>
        </div>
        <div className="card">
          <button className="button">remove</button>
        </div>
      </div>
      <Form handleWish={handleWish} />
    </div>
  );
}

export default App;
