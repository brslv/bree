import React from 'react'
import Button from './Button'
import './Confirmation.css'

const Confirmation = (props) => {
  return (
    <div className="Atom--Confirmation">
      <div className="wrapper">
        <div className="container">
          <div className="content">
            {props.children}
          </div>

          <div className="controls">
            <Button className="small stroke-only">Cancel</Button> &nbsp;
            <Button className="small">Sure, do it</Button>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  )
}

export default Confirmation
