import "./App.css";

const Book = ({ img, author, title, number }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span>{`#${number + 1}`}</span>
    </article>
  );
};

export default Book;

// ---------------------------------------------------------------
//  FOR LEARNING PURPOSES

// const Book = (props) => {
//   const { img, author, title, display, getBook, id } = props; // object destructuring

//   const buyNow = () => {
//     getBook(id);
//   };

//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>

//       {/* <button onClick={getBook(id)}>Buy Now</button>
//         we cannot invoke the parent function which requires a parameter right away,
//         to pass it as a reference we need to call it through another dummy function. */}
//       <button onClick={() => getBook(id)}>Buy Now</button>
//       {/* <button onClick={buyNow}>Buy Now</button> */}

//       {/* <button onClick={display}>Show</button> */}
//     </article>
//   );
// };
