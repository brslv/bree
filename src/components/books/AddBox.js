import React from 'react'
import Card from '../../atoms/Card'
import { Link } from 'react-router-dom'
import './AddBox.css'

const AddBox = (props) => {
  return (
    <Link className="Component--AddBox" to="/books/add">
      <Card>
        <h3>
          Add book
        </h3>
      </Card>
    </Link>
  )
}

export default AddBox
