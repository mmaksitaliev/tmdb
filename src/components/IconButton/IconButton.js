import React from 'react'
import "./index.css"

export default (props) => {
  return (
    <button className="icon-button">
      {props.children}
    </button>
  )
}
