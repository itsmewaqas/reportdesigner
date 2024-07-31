import React, { useState, useEffect } from 'react';
import {
  Routes,
  useLocation,
  Route
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import OuterDashboard from './utilities/OuterDashboard.jsx'
import Login from './outerRoutes/Login.jsx';

import InnerDashboard from './utilities/InnerDashboard.jsx';
import MySpace from './innerRoutes/MySpace.jsx';
import PrivateReports from './innerRoutes/PrivateReports.jsx';
import PublicReports from './innerRoutes/PublicReports.jsx';
import Favourites from './innerRoutes/Favourites.jsx';



import Users from './innerRoutes/Users.jsx';
import NoMatch from './NoMatch.jsx';

function Routers(props) {

  const { loginDetail } = useSelector((state) => state);
  console.log('get loginDetail', loginDetail);

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
            <Route exact path="/" element={<Navigate to="/Login" />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
          :
          <Route path="/" element={<InnerDashboard />}>
            <Route exact path="/" element={<MySpace />} />
            <Route path="MySpace" element={<MySpace />} />
            <Route path="PrivateReports" element={<PrivateReports />} />
            <Route path="PublicReports" element={<PublicReports />} />
            <Route path="Favourites" element={<Favourites />} />
            
            <Route path="Users" element={<Users />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        }
      </Routes>
    </div>
  );
}

export default Routers;
