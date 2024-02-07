// To be able to create this we can simple type 'rafce' and a block of code will be suggested. When selected the following is generated.
 
import React from 'react'

const Button = ({ bgColor, size, color, text, borderRadius}) => {
  return (
    <button
      type='button'
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`} 
    >
      {text}
    </button>
  )
}

export default Button