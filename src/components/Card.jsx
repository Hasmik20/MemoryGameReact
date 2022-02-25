import React from 'react'

const Card = ({ index, handelClick, img, stat }) => {
  const itemClass = stat ? 'active ' + stat : ''
  return (
    <div className='card-container'
    onClick={() => handelClick(index)}
    >
      <div className={itemClass}>
        <img src={img} alt="img" />
      </div>
    </div>
  )
}

export default Card