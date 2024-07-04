import React from 'react'
import CustomTab from '../../components/CustomTabs'
import CustomEditTable from '../../components/CustomEditTable'
import {
  contentMenu,
  columns,
  EditToolbar,
  initialRows
} from './datas/NotifData'
import {
  contentMenuu,
  columnss,
  EditToolbarr,
  initialRowss
} from './datas/adminNoti'

function Notimanage () {
  const [select, setSelect] = React.useState(0)
  const [renderPage, setRenderPage] = React.useState(
    <CustomEditTable
      customToolbar={EditToolbar}
      columns={columns}
      data={initialRows}
    />
  )
  //   const open = useSelector(state => state.drawer.open)
  //   const teamInfo = useSelector(state => state.sidebar)
  const menuLists = ['Manager update', 'Admin update']

  React.useEffect(() => {
    handleMenu(select)
  }, [])

  const handleMenu = (index, text) => {
    setSelect(index)
    switch (index) {
      case 0:
        setRenderPage(
          <CustomEditTable
            customToolbar={EditToolbar}
            columns={columns}
            data={initialRows}
          />
        )
        break
      case 1:
        setRenderPage(
          <CustomEditTable
            customToolbar={EditToolbarr}
            columns={columnss}
            data={initialRowss}
          />
        )

        break

      default:
        break
    }
  }
  return (
    <>
      <div className='max-w-7xl mx-auto mt-40'>
        {/* <CustomTab borderShow={true} tabData={contentMenu} /> */}

        <ul className='na mainnavbar flex gap-4 py-6  cursor-pointer'>
          {menuLists.map((item, index) => (
            <li className='nav-item !text-[16px]' key={index}>
              <a
                className={
                  ('nav-link', index == select && 'active text-yellow-200')
                }
                onClick={() => handleMenu(index, item)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className='main-body'>{renderPage}</div>
      </div>
    </>
  )
}

export default Notimanage
