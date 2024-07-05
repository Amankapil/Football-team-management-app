import React from 'react'
import CustomTab from '../../components/CustomTabs'
import CustomEditTable from '../../components/CustomEditTable'
import {
  contentMenu,
  columns,
  EditToolbar,
  initialRows
} from './datas/squadData'

function SquadPage () {
  return (
    <>
      <div className='max-w-7xl mx-auto mt-40 pl-20'>
        <CustomTab borderShow={true} tabData={contentMenu} />
        <CustomEditTable
          customToolbar={EditToolbar}
          columns={columns}
          data={initialRows}
        />
      </div>
    </>
  )
}

export default SquadPage
