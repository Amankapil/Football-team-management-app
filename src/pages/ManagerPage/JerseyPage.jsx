import React, { useState } from 'react'
import JerseyCard from '../../components/JerseyCard'
import JerseyUploadPopup from './JerseyUploadPopup'

function JerseyPage () {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedJersey, setSelectedJersey] = useState(null)

  const jerseyList = [
    { title: 'Jersey Home', icon: '/images/jersey/liverpool-red.avif' },
    { title: 'Jersey Away', icon: '/images/jersey/liverpool-black.avif' },
    { title: 'Third Kit', icon: '/images/jersey/liverpool-white.avif' },
    { title: 'Goal Keeper', icon: '/images/jersey/liverpool-green.avif' }
  ]

  const handleCardClick = jersey => {
    setSelectedJersey(jersey)
    setIsPopupOpen(true)
  }

  return (
    <div className='d-flex j-start jersey-lists max-w-7xl mx-auto mt-32'>
      {jerseyList.map(item => (
        <JerseyCard
          key={item.title}
          title={item.title}
          icon={item.icon}
          onClick={() => handleCardClick(item)}
        />
      ))}
      <JerseyCard
        title={'Add New jersey'}
        icon={'/images/jersey/new jersey.png'}
        option='new'
        onClick={() => handleCardClick({ title: 'Add New jersey' })}
      />
      {isPopupOpen && (
        <JerseyUploadPopup
          jersey={selectedJersey}
          onClose={() => setIsPopupOpen(false)}
        />
      )}
    </div>
  )
}

export default JerseyPage
