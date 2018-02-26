import React from 'react'
import Box from './Box'
import './Card.css'

const Card = (props) => {
  return <Box className="Component--Card">{props.children}</Box>
}

export default Card
