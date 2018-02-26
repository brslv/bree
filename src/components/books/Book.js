import React from 'react'
import Card from '../../atoms/Card'
import Button from '../../atoms/Button'

const Book = ({ title, description }) => {
  return (
    <Card className="Component--Book">
      <h3 className="title">Book: {title}</h3>
      <h5 className="content">{description}</h5>
      <div className="footer">
        <Button className="small">Write</Button>
      </div>
    </Card>
  )
}

export default Book
