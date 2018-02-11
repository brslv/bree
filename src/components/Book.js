import React from 'react'

const Book = ({ title, description }) => {
  return (
    <div className="Component--Book">
      <h3>Book: {title}</h3>
      <h5>{description}</h5>
    </div>
  )
}

export default Book
