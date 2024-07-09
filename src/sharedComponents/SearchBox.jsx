import React, { useState, useEffect, useRef } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import arrow1 from '../assets/images/arrow1.svg';

function SearchBox({menuSearch, setmenuSearch}) {

  const searchMenuHide = useRef(null)
  const closeOpenMenus = (e) => {
    if (searchMenuHide.current && menuSearch && !searchMenuHide.current.contains(e.target)) {
      setmenuSearch(false)
    }
  }
  document.addEventListener('mousedown', closeOpenMenus)

  useEffect(() => {
  }, []);

  return (
    <div>
      {menuSearch && <div ref={searchMenuHide} className='searchMenu'>
        <ul className='list1'>
          <li><a href="javascript:;">Files</a></li>
          <li><a href="javascript:;">Folder</a></li>
          <li><a href="javascript:;">Organization</a></li>
          <li><a href="javascript:;">Favourites</a></li>
        </ul>
        <h1>Recent Search</h1>
        <Scrollbars style={{ height: 270 }}>
          <ul className='list2'>
            <li>
              <a href="javascript:;">
                <p>MDU Attendance</p>
                <dd><span>My Space</span> <img src={arrow1} alt="" /> <span>Monthly Sheet</span></dd>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <p>MDU Attendance</p>
                <dd><span>My Space</span> <img src={arrow1} alt="" /> <span>Monthly Sheet</span></dd>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <p>MDU Attendance</p>
                <dd><span>My Space</span> <img src={arrow1} alt="" /> <span>Monthly Sheet</span></dd>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <p>MDU Attendance</p>
                <dd><span>My Space</span> <img src={arrow1} alt="" /> <span>Monthly Sheet</span></dd>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <p>MDU Attendance</p>
                <dd><span>My Space</span> <img src={arrow1} alt="" /> <span>Monthly Sheet</span></dd>
              </a>
            </li>
          </ul>
        </Scrollbars>
        {/*{menuSearch}*/}
      </div>}
    </div>
  );
}

export default SearchBox;