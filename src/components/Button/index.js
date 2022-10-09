import React from 'react'

export default function Button(props) {
  return (
    <div>
        <button 
        disabled={props.disabled}
        onClick={props.onClick} 
        className={props.className}
         >{props.title} {props.icon}</button>
    </div>
  )
}
