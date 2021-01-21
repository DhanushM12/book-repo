import React from "react";


const CartItem = (props) => {
  
  const { title, authors, average_rating, isbn, language_code, ratings_count, price } = props.book; //object destructuring
  const {
    book,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onDeleteProduct,
  } = props;
  return (
    <div className="cart-item">
      <div className="left-block">
      <div style={{ fontSize: 25 }}>{title}</div>
      <div style={{ fontSize: 25 }}>{authors}</div>
      </div>
      <div className="right-block">
      <div style={{ color: "#777" }}>Rating: 🌟{average_rating}</div>
      <div style={{ color: "#777" }}>ISBN: {isbn}</div>
      <div style={{ color: "#777" }}>Language: {language_code}</div>
      <div style={{ color: "#777" }}>Rating Count: {ratings_count}</div>
        <div style={{ color: "#777" }}>₹. {price}</div>
        <div className="cart-item-actions">
          {/* Buttons - binding is done to avoid the loss of this */}
          <img
            alt="increase"
            className="actions-icon"
            src="https://image.flaticon.com/icons/svg/992/992651.svg"
            onClick={() => onIncreaseQuantity(book) /*.bind(this)*/}
          />
          <img
            alt="decrease"
            className="actions-icon"
            src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
            onClick={() => onDecreaseQuantity(book)}
          />
          <img
            alt="delete"
            className="actions-icon"
            src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
            onClick={() => onDeleteProduct(book.bookID)}
          />
        </div>
      </div>
    </div>
  );
};


export default CartItem;
