import React, { useEffect, useState } from 'react';
import './LeftSideBar.css';
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import StorefrontIcon from '@mui/icons-material/Storefront';
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function LeftSideBar({ users }) {
  console.log({ users });
  return (
    <div className="LeftSideBar" key={users}>
      <div className="LeftSideBar__top">
        <div className="top__item">
          <img
            src={users.length > 0 ? users[0].picture.thumbnail : ''}
            alt=""
          />
          <p>
            {users.length > 0 ? users[0].name.first : ''}
            {users.length > 0 ? users[0].name.last : ''}
          </p>
        </div>
        <div className="top__item">
          <GroupIcon fontSize="large" />
          <p>Friends</p>
        </div>
        <div className="top__item">
          <GroupsIcon fontSize="large" />
          <p>Groups</p>
        </div>
        <div className="top__item">
          <EventAvailableIcon fontSize="large" />
          <p>Events</p>
        </div>
        <div className="top__item">
          <StorefrontIcon fontSize="large" />
          <p>Marketplace</p>
        </div>
        <div className="top__item">
          <QueuePlayNextIcon fontSize="large" />
          <p>Watch</p>
        </div>
        <div className="top__item">
          <div className="item__seeMore">
            <ArrowDropDownIcon fontSize="large" />
          </div>

          <p>See More</p>
        </div>
      </div>
      <div className="LeftSideBar__bottom">
        <h3> Your Shortcuts</h3>
        <div className="bottom__item">
          <img src="https://bit.ly/39KMKcQ" alt="" />
          <p>Camping/Adventure</p>
        </div>
        <div className="bottom__item">
          <img src="https://bit.ly/2Y85L6L" alt="" />
          <p>PC Enthusiasts</p>
        </div>
        <div className="bottom__item">
          <img src="https://bit.ly/3AQXv9p" alt="" />
          <p>Stock Market</p>
        </div>
        <div className="bottom__item">
          <img src="https://bit.ly/3ASzY80" alt="" />
          <p>Golf Club</p>
        </div>
      </div>
    </div>
  );
}
