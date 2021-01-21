import React from "react";
import Cartitem from './Cartitem'

const Cart = (props) => {
  const { books } = props;
  return (
    <div className="cart">
      {books.map((book) => {
        return (
          <Cartitem
            book={book}
            key={book.bookID}
            onIncreaseQuantity={props.onIncreaseQuantity}
            onDecreaseQuantity={props.onDecreaseQuantity}
            onDeleteProduct={props.onDeleteProduct}
          />
        );
      })}
    </div>
  );
};

export default Cart;

