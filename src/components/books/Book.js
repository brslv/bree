import React from 'react'
import Card from '../../atoms/Card'
import Button from '../../atoms/Button'
import Badge from '../../atoms/Badge'
import { Link } from 'react-router-dom'
import './Book.css'

const Book = ({ id, title, description }) => {
  return (
    <Card className="Component--Book">
      <h3 className="title">{title}</h3>
      <div className="content">{description}</div>
      <div className="footer">
        <div className="left">
          <Badge text="Draft" />
        </div>
        <div className="right">
          <Link to={`/books/${id}/edit/`}>
            <Button className="small stroke-only">Edit</Button>
          </Link> &nbsp;
          <Button className="small">Write</Button>
        </div>
      </div>
    </Card>
  )
}

export default Book
