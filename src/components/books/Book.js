import React from 'react'
import Card from '../../atoms/Card'
import Button from '../../atoms/Button'

const Book = ({ title, description }) => {
  return (
    <Card className="Component--Book">
      <h3 className="title">{title}</h3>
      <div className="content">{description}</div>
      <div className="footer">
        <div className="button-container">
          <Button className="small">Write</Button>
        </div>
      </div>
    </Card>
  )
}

export default Book
