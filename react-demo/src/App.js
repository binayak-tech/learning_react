import "./App.css";
import { books } from "./books";
import Book from "./Book";

const App = () => {
  return (
    <section>
      <h1 id="heading">Amazon Best Selling Books</h1>
      <div className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </div>
    </section>
  );
};

export default App;

// --------------------------------------------------------------
//  FOR LEARNING PURPOSES

// const App = () => {
//   const val = "hie";

//   const displayVal = () => {
//     // prop drilling example
//     console.log(val);
//   };

//   const getBook = (bookId) => {
//     const book = books.find((book) => book.id === bookId);
//     console.log(`Thank you for buying ${book.title} by ${book.author}.`);
//   };

//   return (
//     <section>
//       <h1 id="heading">Amazon Best Selling Books</h1>
//       <div className="booklist">
//         {books.map((book, index) => {
//           return (
//             <Book
//               {...book}
//               key={book.id}
//               display={displayVal}
//               getBook={getBook}
//             />
//           ); // using spread operator for destructuring
//         })}
//       </div>
//     </section>
//   );
// };

// export default App;
