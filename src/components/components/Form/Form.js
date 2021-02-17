import React from "react";
import List from "../List/List";

function Form({ handleWish }) {
  const [formState, setFormState] = React.useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setFormState(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newWish = formState;
    handleWish(newWish);
    setFormState("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="wish"></label>
      <input
        type="text"
        name="wish"
        id="wish"
        value={formState}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
