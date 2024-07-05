import React, { useState } from 'react'
import JerseyCard from '../../components/JerseyCard'
import JerseyUploadPopup from './JerseyUploadPopup'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@mui/material'

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
    setOpen(true)
  }
  const [open, setOpen] = useState(false)

  const handleOpen = row => {
    // setCurrentRow(row)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    // setCurrentRow({ id: '', name: '', pos: '', avatar: '' })
  }
  return (
    <div className='d-flex j-start jersey-lists max-w-7xl mx-auto mt-32 pl-20'>
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
      {/* {isPopupOpen && ( */}
      <Dialog open={open} onClose={handleClose}>
        <div className='bg-[#061727]'>
          <DialogTitle>Add New jersey</DialogTitle>
          <DialogContent className='bg-[#061727]'>
            <TextField
              autoFocus
              margin='dense'
              label='title'
              type='text'
              fullWidth
              // value={initialRows.name}
              // onChange={e =>
              //   setinitialRows({ ...initialRows, name: e.target.value })
              // }
            />

            <TextField
              margin='dense'
              // label='Jersey'
              type='file'
              fullWidth
              // value={initialRows.avatar}
              // onChange={e =>
              //   setinitialRows({ ...initialRows, avatar: e.target.value })
              // }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Save</Button>
          </DialogActions>
        </div>
      </Dialog>
      {/* )} */}
    </div>
  )
}

export default JerseyPage
