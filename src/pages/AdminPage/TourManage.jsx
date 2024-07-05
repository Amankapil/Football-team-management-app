import React, { useState } from 'react'
import './adminstyle.css'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'

import CustomTab from '../../components/CustomTabs'
import CustomEditTable from '../../components/CustomEditTable'
import {
  contentMenu,
  columns,
  EditToolbar,
  initialRows
} from '../AdminPage/datas/tournamentDetailData'

const TournamentManagement = () => {
  return (
    <>
      <div className='max-w-7xl mx-auto mt-0 pl0'>
        {/* <CustomTab borderShow={true} tabData={contentMenu} /> */}
        <CustomEditTable
          customToolbar={EditToolbar}
          columns={columns}
          data={initialRows}
        />
      </div>
    </>
  )
}

export default TournamentManagement
