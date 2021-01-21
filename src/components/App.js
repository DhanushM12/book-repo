import React, {useState, useEffect} from 'react';
import '../App.css';
import NavBar from './Navbar';
import Cart from './Cart';

function App() {
   const [books, setBooks] = useState([]);
    useEffect(() => {
        //console.log('render'); 
        fetch(`https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json`)
         .then(response => response.json())
         .then(json => setBooks(json))
     }, []);
     const handleIncreaseQuantity = (book) => {
      console.log("Hey please inc the qty of ", book);
      const index = books.indexOf(book);
      books[index].qty += 1;
      setBooks(books);
    };
    const handleDecreaseQuantity = (product) => {
      console.log("Hey please decr the qty of ", product);
      const index = books.indexOf(product);
      if (books[index].qty !== 0) {
        books[index].qty -= 1;
      }
      setBooks(books);
    };
    const handleDeleteProduct = (id) => {
      const items = books.filter((item) => item.id !== id); // return an array whose id is not equal to the id mentioned
      this.setState({
        books: items,
      });
    };
    const getCartCount = () => {
      
      let count = 0;
      books.forEach((product) => {
        count += product.qty;
      });
  
      return count;
    };
    const getCartTotal = () => {
    
      let cartTotal = 0;
      books.map((product) => {
        cartTotal = cartTotal + product.qty * product.price;
        return cartTotal;
      });
      return cartTotal;
    };
  return (
    <div className="App">
        <NavBar count={getCartCount} />
        <Cart
          books={books}
          onIncreaseQuantity={handleIncreaseQuantity}
          onDecreaseQuantity={handleDecreaseQuantity}
          onDeleteProduct={handleDeleteProduct}
        />
        <div style={{ padding: 10, fontSize: 20 }}>
          Total: {getCartTotal}
        </div>
      </div>
  )
}

export default App;