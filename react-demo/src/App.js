import "./App.css";
import { books } from "./books";
import EventsExp from "./EventsExp";

const App = () => {
  return (
    <section>
      <h1 id="heading">Amazon Best Selling Books</h1>
      <EventsExp />
      <div className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={index} />; // using spread operator for destructuring
        })}
      </div>
    </section>
  );
};

const Book = (props) => {
  const { img, author, title } = props; // object destructuring
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};
export default App;
