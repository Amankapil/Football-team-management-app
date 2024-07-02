import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import './team.css'

const Createteam = () => {
  const initialTeams = [
    {
      id: 1,
      name: 'Team Alpha',
      logo: 'https://via.placeholder.com/50',
      contact: 'alpha@example.com',
      manager: 'John Doe',
      players: ['Player 1', 'Player 2']
    },
    {
      id: 2,
      name: 'Team Beta',
      logo: 'https://via.placeholder.com/50',
      contact: 'beta@example.com',
      manager: 'Jane Smith',
      players: ['Player 3', 'Player 4']
    },
    {
      id: 3,
      name: 'Team Gamma',
      logo: 'https://via.placeholder.com/50',
      contact: 'gamma@example.com',
      manager: 'Mike Johnson',
      players: ['Player 5', 'Player 6']
    }
  ]

  const [teams, setTeams] = useState(initialTeams)
  const [newTeam, setNewTeam] = useState({
    name: '',
    logo: '',
    contact: '',
    manager: '',
    players: []
  })
  const [editingTeam, setEditingTeam] = useState(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [newPlayerName, setNewPlayerName] = useState('')

  const handleChange = e => {
    const { name, value } = e.target
    setNewTeam(prev => ({ ...prev, [name]: value }))
  }

  const handleAddTeam = () => {
    const newTeamWithId = { ...newTeam, id: Date.now() }
    setTeams([...teams, newTeamWithId])
    setNewTeam({ name: '', logo: '', contact: '', manager: '', players: [] })
    setIsPopupOpen(false)
  }

  const handleEditTeam = team => {
    setEditingTeam(team)
    setNewTeam(team)
    setIsPopupOpen(true)
  }

  const handleUpdateTeam = () => {
    setTeams(teams.map(t => (t.id === editingTeam.id ? newTeam : t)))
    setEditingTeam(null)
    setNewTeam({ name: '', logo: '', contact: '', manager: '', players: [] })
    setIsPopupOpen(false)
  }

  const handleDeleteTeam = teamId => {
    setTeams(teams.filter(t => t.id !== teamId))
  }

  const handleAddPlayer = () => {
    if (newPlayerName.trim() !== '') {
      setNewTeam(prev => ({
        ...prev,
        players: [...prev.players, newPlayerName]
      }))
      setNewPlayerName('')
    }
  }

  const handleRemovePlayer = index => {
    setNewTeam(prev => ({
      ...prev,
      players: prev.players.filter((_, i) => i !== index)
    }))
  }

  const openPopup = () => {
    setIsPopupOpen(true)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
    setEditingTeam(null)
    setNewTeam({ name: '', logo: '', contact: '', manager: '', players: [] })
  }

  return (
    <div className='team-management mt-28'>
      <h2 className='mb-10'>
        Team Management
        <button className='add-team-btn' onClick={openPopup}>
          +
        </button>
      </h2>
      <div className='team-list'>
        <table className='teams-table text-left text-[16px]'>
          <thead>
            <tr>
              <th>Team Name</th>
              <th>Logo</th>
              <th>Contact</th>
              <th>Manager</th>
              <th>Players</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {teams.map(team => (
              <tr key={team.id}>
                <td>{team.name}</td>
                <td>
                  <img src={team.logo} alt={team.name} className='team-logo' />
                </td>
                <td>{team.contact}</td>
                <td>{team.manager}</td>
                <td>
                  <ul>
                    {team.players.map((player, index) => (
                      <li key={index}>
                        {player}
                        <IconButton
                          aria-label='remove'
                          onClick={() => handleRemovePlayer(index)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </li>
                    ))}
                  </ul>
                  {/* <div className='add-player-input'>
                    <input
                      type='text'
                      value={newPlayerName}
                      onChange={e => setNewPlayerName(e.target.value)}
                      placeholder='Add Player'
                    />
                    <button
                      className='add-player-btn'
                      onClick={handleAddPlayer}
                    >
                      Add
                    </button>
                  </div> */}
                </td>
                <td>
                  <IconButton
                    aria-label='edit'
                    onClick={() => handleEditTeam(team)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label='delete'
                    onClick={() => handleDeleteTeam(team.id)}
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
        <div className='popup text-[#000]'>
          <div className='popup-content'>
            <span className='close-btn' onClick={closePopup}>
              &times;
            </span>
            <div className='team-form'>
              <input
                type='text'
                name='name'
                value={newTeam.name}
                onChange={handleChange}
                placeholder='Team Name'
              />
              <input
                type='text'
                name='logo'
                value={newTeam.logo}
                onChange={handleChange}
                placeholder='Team Logo URL'
              />
              <input
                type='text'
                name='contact'
                value={newTeam.contact}
                onChange={handleChange}
                placeholder='Contact Details'
              />
              <input
                type='text'
                name='manager'
                value={newTeam.manager}
                onChange={handleChange}
                placeholder='Assign Manager'
              />
              <div className='add-player-input'>
                <input
                  type='text'
                  value={newPlayerName}
                  onChange={e => setNewPlayerName(e.target.value)}
                  placeholder='Add Player'
                />
                <button className='add-player-btn' onClick={handleAddPlayer}>
                  Add Player
                </button>
              </div>
              {editingTeam ? (
                <button onClick={handleUpdateTeam}>Update Team</button>
              ) : (
                <button onClick={handleAddTeam}>Add Team</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default Createteam
