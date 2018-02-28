import React from 'react'
import Box from './Box'
import './Card.css'

const Card = (props) => {
  let className = 'Component--Card'
  if (props.className) {
    className += ` ${props.className}`
  }

  return <Box className={className}>{props.children}</Box>
}

export default Card
