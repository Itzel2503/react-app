import React from "react";
import ReactDOM from "react-dom/client";

// Importar los estilos de la carpeta 'src'
import './index.css';

// function Greeting() {
//   return (
//     <div>
//         <Person/>
//         <Message/>
//     </div>
//   );
// }

// const Person = () => <h2>Elon Musk</h2>;
// const Message = () => {
//     return <p>this is my message</p>;
// }

// function Greeting() {
//   return (
//     <>
//       <div className="someValue">
//         <h2>hello world</h2>
//         <ul>
//           <li>
//             <a href="#">hello world</a>
//           </li>
//         </ul>
//       </div>
//       <h2>hello world</h2>
//       <input type="text" name="" id=""/>
//     </>
//   );
// }

// function Greeting() {
//   return React.createElement("h2", {}, "hello world");
// }

// function Greeting() {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h2', {}, 'hello world')
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Greeting />);


function BookList() {
  return (
    <sectio className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
    </sectio>
  )
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => <img src='https://images-na.ssl-images-amazon.com/images/I/71UTAmoNddL._AC_UL900_SR900,600_.jpg'/>;
const Title = () => {
  return <h2>You Like It Darker: Stories</h2>;
};
const Author = () => <h4>Stephen King</h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

