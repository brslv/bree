import React from 'react'
import Card from '../../atoms/Card'
import Button from '../../atoms/Button'
import Badge from '../../atoms/Badge'
import './Book.css'

const Book = ({ title, description }) => {
  return (
    <Card className="Component--Book">
      <h3 className="title">{title}</h3>
      <div className="content">{description}</div>
      <div className="footer">
        <div className="left">
          <Badge text="Draft" />
        </div>
        <div className="right">
          <Button className="small">Write</Button>
        </div>
      </div>
    </Card>
  )
}

export default Book
