import React from 'react'
import CustomEditTable from '../../components/CustomEditTable'
import { columns, initialRows } from './datas/tranferData'

function TransferPage () {
  return (
    <>
      <div className='max-w-7xl mx-auto mt-40'>
        <CustomEditTable columns={columns} data={initialRows} />
      </div>
    </>
  )
}

export default TransferPage
