import React from 'react';
import './RightSideBar.css';
// Material UI Icons
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import GroupsIcon from '@mui/icons-material/Groups';

export default function RightSideBar({ users }) {
  // users.shift();
  delete users[0];
  return (
    <div className="RightSideBar">
      <div className="RightSideBar__heading">
        <h4>Contacts</h4>
        <div className="heading__icons">
          <VideoCallIcon />
          <SearchIcon />
          <MoreHorizIcon />
        </div>
      </div>

      <div className="RightSideBar__body">
        {users.map((user) => (
          <div className="body__item" key={user.login.uuid}>
            <img src={user.picture.thumbnail} alt="" />
            <p>
              {user.name.first} {user.name.last}
            </p>
          </div>
        ))}
      </div>

      <div className="RightSideBar__footer">
        <h4>Group Conversations</h4>
        <div className="footer__group">
          <GroupsIcon fontSize="large" />
          <p>Dan, William, and 5 other</p>
        </div>
        <div className="footer__group">
          <GroupsIcon fontSize="large" />
          <p>Jose, Anna, and 2 other</p>
        </div>
        <div className="footer__group">
          <GroupsIcon fontSize="large" />
          <p> Jay, Enoch, and 11 other</p>
        </div>
        <div className="footer__create">
          <div className="create__button">
            <AddIcon fontSize="large" />
          </div>

          <h4>Create New Group</h4>
        </div>
      </div>
    </div>
  );
}
