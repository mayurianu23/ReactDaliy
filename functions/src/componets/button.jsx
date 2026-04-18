import React from 'react'

const button = (props) => {
  return (
    <div>
        <button onClick={props.handeleclick}>
           {props.text} </button>
    </div>
  )
}

export default button