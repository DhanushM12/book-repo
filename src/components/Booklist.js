import React, {useState, useEffect}from 'react'

function Booklist() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        //console.log('render'); 
        fetch(`https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json`)
         .then(response => response.json())
         .then(json => setBooks(json))
     }, []);
    return (
        <div>
            {books.map(book => {
                    return <p>{JSON.stringify(book)}</p>
                })}
        </div>
    )
}

export default Booklist
