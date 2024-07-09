import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import DashHeader from '../utilities/DashHeader';
import DashSidebar from '../utilities/DashSidebar';
import DashFooter from '../utilities/DashFooter';
import { useDispatch, useSelector } from 'react-redux';
import Notify from './Notify';
import TopMenu from './TopMenu';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function InnerDashboard(props) {

  const data = useSelector((state) => state);

  const [sidebarCtrl, sidebarCtrlSet] = useState("dSidebar");
  const [titleCtrl, titleCtrlSet] = useState("titleShow");
  const [dashContainer, SetdashContainer] = useState("dContainer");
  const [notifyRow, SetnotifyRow] = useState(true);

  const sidebarCtrlFunc = () => {
    sidebarCtrlSet(sidebarCtrl == 'dSidebar' ? 'dSidebarCollaps' : 'dSidebar');
    titleCtrlSet(titleCtrl == 'titleShow' ? 'titleHide' : 'titleShow');
    SetdashContainer(dashContainer == 'dContainer' ? 'dContainerCollaps' : 'dContainer');
  }

  useEffect(() => {
  }, [])

  return (
    <div className={`dMain`}>
      <ToastContainer />
      <DashHeader
        sidebarCtrlFunc={sidebarCtrlFunc}
        titleCtrl={titleCtrl} />
      <div className='topMenu clearfix'>
        {notifyRow && <Notify notifyClose={() => SetnotifyRow(false)} />}
        <TopMenu />
      </div>
      <DashSidebar
        topCtrl={{ top: notifyRow == true ? '130px' : '90px' }}
        sidebarCtrl={sidebarCtrl}
        titleCtrl={titleCtrl} />
      <div className={dashContainer} style={{ marginTop: notifyRow == true ? '130px' : '98px' }}>
        <div className='dContainerInner'>
          <Outlet />
        </div>
      </div>
      <DashFooter />
    </div>
  );
}

export default InnerDashboard;