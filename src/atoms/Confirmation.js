import React from 'react'
import Button from './Button'
import Card from './Card'
import './Confirmation.css'

const Confirmation = (props) => {
  return (
    <div className="Atom--Confirmation">
      <div className="wrapper">
        <Card className="container">
          <div className="content">
            {props.children}
          </div>

          <div className="controls">
            <Button
              onClick={e => props.onConfirm(e, { confirmed: false })}
              className="small stroke-only"
            >
              Cancel
            </Button>

            &nbsp;

            <Button
              onClick={e => props.onConfirm(e, { confirmed: true })}
              className="small"
            >
              Sure, do it
            </Button>
          </div>
        </Card>
      </div>
      <div className="overlay"></div>
    </div>
  )
}

export default Confirmation
