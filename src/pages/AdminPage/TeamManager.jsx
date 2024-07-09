import React, { useState } from 'react'
import './adminstyle.css'
import CustomEditTable from '../../components/CustomEditTable'

import { columns, initialRows, EditToolbar } from './datas/TeamManageData'

const TeamManager = () => {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: 'John Doe',
      number: '1234567890',
      username: 'johndoe',
      password: 'password123'
    },
    {
      id: 2,
      name: 'Jane Smith',
      number: '9876543210',
      username: 'janesmith',
      password: 'password456'
    }
  ])

  const [newMember, setNewMember] = useState({
    name: '',
    number: '',
    username: '',
    password: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setNewMember(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    const newMemberWithId = { ...newMember, id: Date.now() }
    setTeamMembers([...teamMembers, newMemberWithId])

    // Reset form fields
    setNewMember({ name: '', number: '', username: '', password: '' })
  }

  return (
    // <div className='team-management'>
    //   <h2 className='mb-10'>Team Member Management</h2>

    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type='text'
    //       name='name'
    //       value={newMember.name}
    //       onChange={handleChange}
    //       placeholder='Name'
    //       required
    //     />
    //     <input
    //       type='text'
    //       name='number'
    //       value={newMember.number}
    //       onChange={handleChange}
    //       placeholder='Number'
    //       required
    //     />
    //     <input
    //       type='text'
    //       name='username'
    //       value={newMember.username}
    //       onChange={handleChange}
    //       placeholder='Username'
    //       required
    //     />
    //     <input
    //       type='password'
    //       name='password'
    //       value={newMember.password}
    //       onChange={handleChange}
    //       placeholder='Password'
    //       required
    //     />
    //     <button type='submit'>Add Team Member</button>
    //   </form>

    //   <div className='team-member-list'>
    //     <h3>Team Members</h3>
    //     <table className='team-members-table'>
    //       <thead>
    //         <tr>
    //           <th>Name</th>
    //           <th>Number</th>
    //           <th>Username</th>
    //           <th>Password</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {teamMembers.map(member => (
    //           <tr key={member.id}>
    //             <td>{member.name}</td>
    //             <td>{member.number}</td>
    //             <td>{member.username}</td>
    //             <td>{member.password}</td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>

    <div className='max-w-7xl mx-auto mt-40 pl-20 max-md:p-4  max-sm:p-5'>
      <CustomEditTable
        customToolbar={EditToolbar}
        columns={columns}
        data={initialRows}
        showActions={true}
      />
    </div>
  )
}

export default TeamManager
