import React from 'react'
import './PageContainer.css'

const PageContainer = (props) => {
  let className = 'Component--PageContainer'
  if (props.className) {
    className += ` ${props.className}`
  }

  console.log(className)

  return (
    <div className={className}>
      <div className="page-title">
        <h2>{props.title}</h2>
      </div>
      <div className="page-content">
        {props.children}
      </div>
    </div>
  )
}

export default PageContainer
