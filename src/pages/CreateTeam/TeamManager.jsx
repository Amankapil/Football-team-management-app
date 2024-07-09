import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import './team.css'

import CustomTab from '../../components/CustomTabs'
import CustomEditTable from '../../components/CustomEditTable'
import {
  contentMenu,
  columns,
  EditToolbar,
  initialRows
} from '../AdminPage/datas/CreateTeamdata'

const Createteam = () => {
  return (
    <>
      <div className='max-w-7xl mx-auto mt-40 pl-20 max-md:p-4  max-sm:p-5'>
        {/* <CustomTab borderShow={true} tabData={contentMenu} /> */}
        <CustomEditTable
          customToolbar={EditToolbar}
          columns={columns}
          data={initialRows}
          showActions={true}
        />
      </div>
    </>
  )
}
export default Createteam
