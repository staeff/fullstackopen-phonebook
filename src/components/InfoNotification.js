import React from 'react'

const InfoNotification = ({ msg }) => {
  if (msg === null) {
    return null
  }

  return (
    <div className='info'>
      {msg}
    </div>
  )
}

export default InfoNotification
