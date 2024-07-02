import React, { useState } from 'react'
import './adminstyle.css'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'

const TournamentManagement = () => {
  const initialTournaments = [
    {
      id: 1,
      name: 'Champions Cup',
      teams: 'Team Alpha, Team Beta',
      status: 'Active',
      startDate: '2024-07-01',
      endDate: '2024-07-15',
      logo: 'https://via.placeholder.com/50',
      sponsor: 'Sponsor A'
    },
    {
      id: 2,
      name: 'Summer Slam',
      teams: 'Team Gamma, Team Delta',
      status: 'Completed',
      startDate: '2024-08-01',
      endDate: '2024-08-15',
      logo: 'https://via.placeholder.com/50',
      sponsor: 'Sponsor B'
    },
    {
      id: 3,
      name: 'Winter Classic',
      teams: 'Team Epsilon, Team Zeta',
      status: 'Scheduled',
      startDate: '2024-09-01',
      endDate: '2024-09-15',
      logo: 'https://via.placeholder.com/50',
      sponsor: 'Sponsor C'
    }
  ]

  const [tournaments, setTournaments] = useState(initialTournaments)
  const [newTournament, setNewTournament] = useState({
    name: '',
    teams: '',
    status: '',
    startDate: '',
    endDate: '',
    logo: '',
    sponsor: ''
  })
  const [editingTournament, setEditingTournament] = useState(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setNewTournament(prev => ({ ...prev, [name]: value }))
  }

  const handleAddTournament = () => {
    const newTournamentWithId = { ...newTournament, id: Date.now() }
    setTournaments([...tournaments, newTournamentWithId])
    setNewTournament({
      name: '',
      teams: '',
      status: '',
      startDate: '',
      endDate: '',
      logo: '',
      sponsor: ''
    })
    setIsPopupOpen(false)
  }

  const handleEditTournament = tournament => {
    setEditingTournament(tournament)
    setNewTournament(tournament)
    setIsPopupOpen(true)
  }

  const handleUpdateTournament = () => {
    setTournaments(
      tournaments.map(tournament =>
        tournament.id === editingTournament.id ? newTournament : tournament
      )
    )
    setEditingTournament(null)
    setNewTournament({
      name: '',
      teams: '',
      status: '',
      startDate: '',
      endDate: '',
      logo: '',
      sponsor: ''
    })
    setIsPopupOpen(false)
  }

  const handleDeleteTournament = tournamentId => {
    setTournaments(
      tournaments.filter(tournament => tournament.id !== tournamentId)
    )
  }

  const openPopup = () => {
    setIsPopupOpen(true)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
    setEditingTournament(null)
    setNewTournament({
      name: '',
      teams: '',
      status: '',
      startDate: '',
      endDate: '',
      logo: '',
      sponsor: ''
    })
  }

  return (
    <div className='tournament-management'>
      <h2 className='mb-10'>
        Tournament Management
        <button className='add-tournament-btn' onClick={openPopup}>
          +
        </button>
      </h2>
      <div className='tournament-list'>
        <table className='tournaments-table text-left text-[16px]'>
          <thead>
            <tr>
              <th className='text-[#ffc107]'>Logo</th>
              <th className='text-left text-[#ffc107]'>Tournament Name</th>
              <th className='text-[#ffc107]'>Teams</th>
              <th className='text-[#ffc107]'>Status</th>
              <th className='text-[#ffc107]'>Start Date</th>
              <th className='text-[#ffc107]'>End Date</th>
              <th className='text-[#ffc107]'>Sponsor</th>
              <th className='text-[#ffc107]'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tournaments.map(tournament => (
              <tr key={tournament.id}>
                <td>
                  <img
                    src={tournament.logo}
                    alt={tournament.name}
                    className='team-logo'
                  />
                </td>
                <td>{tournament.name}</td>
                <td>{tournament.teams}</td>
                <td>{tournament.status}</td>
                <td>{tournament.startDate}</td>
                <td>{tournament.endDate}</td>
                <td>{tournament.sponsor}</td>
                <td>
                  <IconButton
                    aria-label='edit'
                    onClick={() => handleEditTournament(tournament)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label='delete'
                    onClick={() => handleDeleteTournament(tournament.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isPopupOpen && (
        <div className='popup'>
          <div className='popup-content'>
            <span className='close-btn' onClick={closePopup}>
              &times;
            </span>
            <div className='tournament-form'>
              <input
                type='text'
                name='name'
                value={newTournament.name}
                onChange={handleChange}
                placeholder='Tournament Name'
              />
              <input
                type='text'
                name='teams'
                value={newTournament.teams}
                onChange={handleChange}
                placeholder='Teams in Tournament'
              />
              <input
                type='text'
                name='status'
                value={newTournament.status}
                onChange={handleChange}
                placeholder='Status'
              />
              <input
                type='text'
                name='startDate'
                value={newTournament.startDate}
                onChange={handleChange}
                placeholder='Start Date'
              />
              <input
                type='text'
                name='endDate'
                value={newTournament.endDate}
                onChange={handleChange}
                placeholder='End Date'
              />
              <input
                type='text'
                name='logo'
                value={newTournament.logo}
                onChange={handleChange}
                placeholder='Logo URL'
              />
              <input
                type='text'
                name='sponsor'
                value={newTournament.sponsor}
                onChange={handleChange}
                placeholder='Sponsor'
              />
              {editingTournament ? (
                <button onClick={handleUpdateTournament}>
                  Update Tournament
                </button>
              ) : (
                <button onClick={handleAddTournament}>Add Tournament</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TournamentManagement
