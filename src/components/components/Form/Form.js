import React from "react";


function Form({ onSubmit, children }) {
  const [wish, setWish] = React.useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setWish(value);
    console.log(value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newWish = formState;
    onSubmit(wish);
    setWish("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="wish"></label>
      <input
        type="text"
        name="wish"
        value={wish}
        onChange={handleChange}
      />
      <button type="submit">Submit a wish</button>
    </form>
  );
}

export default Form;
