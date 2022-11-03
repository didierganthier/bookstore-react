import React, { useState } from 'react'

const InputForm = (props) => {
    const { setBooks, books } = props;

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const addBook = (e) => {
        e.preventDefault();
        const newBook = {
            title: title,
            author: author,
        }
        setBooks([...books, newBook]);
    }

    return (
        <form onSubmit={(e) => addBook(e)}>
            <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <input type="text" onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
            <button onClick={(e) => addBook(e)}>Add</button>
        </form>
    )
}

export default InputForm
