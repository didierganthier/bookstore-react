import React from 'react'

const Book = (props) => {

    const { title, author } = props;
    return (
        <div>
            <h1>{title}</h1>
            <h2>{author}</h2>
            <button>Remove</button>
        </div>
    )
}

export default Book
