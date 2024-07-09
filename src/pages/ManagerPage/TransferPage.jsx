import React from 'react'
import CustomEditTable from '../../components/CustomEditTable'
import { columns, initialRows } from './datas/tranferData'
import { EditToolbar } from './datas/tranferData'

function TransferPage () {
  return (
    <>
      <div className='max-w-7xl mx-auto mt-40 pl-20 max-md:p-20  max-sm:p-5'>
        {/* <CustomEditTable columns={columns} data={initialRows} /> */}

        <CustomEditTable
          customToolbar={EditToolbar}
          columns={columns}
          data={initialRows}
        />
      </div>
    </>
  )
}

export default TransferPage
