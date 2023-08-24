import "./App.css";

const EventsExp = () => {
  const handleChange = (e) => {
    // console.log("input box is changed");
    // console.log(e.target);
    // console.log(e.target.name);
    console.log(e.target.value);
  };
  // const handleButtonClick = () => {
  //   alert("button is clicked");
  // };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("form is submitted");
  };

  return (
    <section>
      <h2>
        <strong>Example Event</strong>
      </h2>
      <form onSubmit={handleFormSubmission}>
        <input
          type="text"
          name="example"
          onChange={handleChange}
          style={{ margin: "1rem 0" }}
        />
        <br />
        {/* using annonymus function to handle event */}
        <button type="submit" onClick={() => console.log("button is clicked")}>
          Submit
        </button>
      </form>
    </section>
  );
};
export default EventsExp;
