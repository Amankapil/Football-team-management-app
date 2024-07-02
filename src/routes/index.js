import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

import Loading from '../pages/Landing'

import Landing from '../pages/Landing'
import Appbar from '../components/Layout/Appbar'
import Test from '../pages/Test'
import NotFound from '../pages/Errors/NotFound'
import ManagerPage from '../pages/ManagerPage'
import AdminPage from '../pages/AdminPage'
import UserPage from '../pages/UserPage'
import FavouritePage from '../pages/FavouritePage'
import NewsPage from '../pages/NewsPage'
import AccountPage from '../pages/AccountPage'
import TeamRegistrationForm from '../pages/Addteam/TeamRegistrationForm'

import ForgotPassword from '../components/CustomModal/ForgotPassword'
import Createteam from '../pages/CreateTeam/TeamManager'
import TeamManager from '../pages/AdminPage/TeamManager'
// import TeamPage from "../pages/UserPage/teams";

// import AuthRoutes from "./AuthRoutes.jsx";

// const ManagerRoutes = React.lazy(() =>
//     import("./ManagerRoutes.jsx")
// );
// const CommonRoutes = React.lazy(() =>
//     import("./CommonRoutes.jsx")
// );
// const AdminRoutes = React.lazy(() =>
//     import("./AdminRoutes.jsx")
// );
const BanRoutes = ['/not-found']
function MainRoutes () {
  const [open, setOpen] = useState(true)
  const url = useLocation()
  const pathName = url.pathname
  useEffect(() => {
    setTimeout(() => {
      setOpen(false)
    }, 2400)
  })
  //   const authenticated = useSelector((store) => store.auth.authenticated);
  //   const isAdmin = useSelector((store) => store.auth.Admin.IsAdmin);
  // const isAdmin = false;

  return (
    <div>
      {open && <Landing></Landing>}
      {!open && (
        <div className='1stkj'>
          {!BanRoutes.includes(pathName) && <Appbar />}
          <React.Suspense fallback={<Loading></Loading>}>
            <Routes>
              <Route exact path='/' element={<UserPage></UserPage>}></Route>
              <Route exact path='/addteam' element={<Createteam />}></Route>
              <Route
                exact
                path='/teammanager'
                element={<TeamManager />}
              ></Route>
              <Route
                exact
                path='/forget-password'
                element={<ForgotPassword />}
              ></Route>
              <Route
                exact
                path='/manager'
                element={<ManagerPage></ManagerPage>}
              ></Route>
              <Route
                exact
                path='/admin/:key'
                element={<AdminPage></AdminPage>}
              ></Route>
              <Route
                exact
                path='/favourites/:key'
                element={<FavouritePage></FavouritePage>}
              ></Route>
              <Route
                exact
                path='/account'
                element={<AccountPage></AccountPage>}
              ></Route>
              <Route exact path='/news' element={<NewsPage></NewsPage>}></Route>
              <Route
                exact
                path='/not-found'
                element={<NotFound></NotFound>}
              ></Route>
              {/* <Route exact path="*" element={<Navigate to="/not-found" />} /> */}
            </Routes>
          </React.Suspense>
        </div>
      )}
    </div>
    //   {/* {!authenticated && <AuthRoutes></AuthRoutes>}
    //   {authenticated && !isAdmin && <AuthenticatedRoutes></AuthenticatedRoutes>}
    //   {authenticated && isAdmin && <AdminRoutes></AdminRoutes>} */}
    // </React.Suspense>
  )
}

export default MainRoutes
