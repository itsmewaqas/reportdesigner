import React, { useState, useEffect } from 'react';
import {
  Routes,
  useLocation,
  Route,
  Navigate
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import OuterDashboard from './utilities/OuterDashboard.jsx'
import Login from './outerRoutes/Login.jsx';

import InnerDashboard from './utilities/InnerDashboard.jsx';
import MySpace from './innerRoutes/MySpace.jsx';
import PrivateReports from './innerRoutes/PrivateReports.jsx';
import PublicReports from './innerRoutes/PublicReports.jsx';
import Favourites from './innerRoutes/Favourites.jsx';
import FilterRoute from './innerRoutes/FilterRoute.jsx';
import Users from './innerRoutes/Users.jsx';

import Visualization from './innerRoutes/Visualization.jsx';
import Organization from './innerRoutes/Organization.jsx';

import NoMatch from './NoMatch.jsx';

function Routers(props) {

  const { loginDetail } = useSelector((state) => state);
  console.log('get loginDetail', loginDetail);
  const menuSlice = useSelector((state) => state.menuSlice);

  // const [auth, Setauth] = useState(
  //   { email: 'm.waqas@test.com', password: 'waqas123' }
  // );

  useEffect(() => {
  }, [])

  return (
    <div>
      <Routes>
        {loginDetail.isAuth == false ?
          <Route path="/" element={<OuterDashboard />}>
            <Route path="/Login" element={<Navigate to="/" />} />
            <Route exact path="/" element={<Login />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
          :
          <Route path="/" element={<InnerDashboard />}>
            {menuSlice.menuList[0].title == 'Home' ?
              <>
                <Route exact path="/" element={<MySpace />} />
                <Route path="MySpace" element={<MySpace />} />
                <Route path="PrivateReports" element={<PrivateReports />} />
                <Route path="PublicReports" element={<PublicReports />} />
                <Route path="Favourites" element={<Favourites />} />
                <Route path="FilterRoute" element={<FilterRoute />} />
                <Route path="Users" element={<Users />} />
                <Route path="*" element={<MySpace />} />
              </>
              :
              menuSlice.menuList[0].title == 'Visualization' ?
                <>
                  <Route exact path="/" element={<Visualization />} />
                  <Route path="Visualization" element={<Visualization />} />
                  <Route path="*" element={<Visualization />} />
                </>
                :
                menuSlice.menuList[0].title == 'Organization' ?
                  <>
                    <Route exact path="/" element={<Organization />} />
                    <Route path="Organization" element={<Organization />} />
                    <Route path="*" element={<Organization />} />
                  </>
                  : null}
            <Route path="*" element={<NoMatch />} />
          </Route>
        }
      </Routes>
    </div>
  );
}

export default Routers;
