import React from 'react'

const HighlightText = ({text}) => {
  return (
    <span className='font-bold bg-gradient-to-r bg-clip-text text-transparent from-caribbeangreen-500 via-blue-600 to-blue-100'>
        {text}
    </span>
  )
}

export default HighlightText