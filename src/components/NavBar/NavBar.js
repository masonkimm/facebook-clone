import React from 'react';
import './NavBar.css';
// Material UI icons
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import ArticleIcon from '@mui/icons-material/Article';
import AppsIcon from '@mui/icons-material/Apps';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function NavBar({ users }) {
  // useEffect(() => {
  //   axios.get('https://randomuser.me/api/?results=15').then((res) => {
  //     setUsers(res.data.results);
  //   });
  // }, []);
  // const [users, setUsers] = useState([]);

  return (
    <div className="NavBar">
      <div className="NavBar__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <div className="left__input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="NavBar__center">
        <div className="center__icons isActive">
          <HomeIcon fontSize="medium" id="isActive" />
        </div>

        <div className="center__icons">
          <OndemandVideoIcon fontSize="medium" />
        </div>
        <div className="center__icons">
          <StorefrontIcon fontSize="medium" />
        </div>

        <div className="center__icons">
          <SupervisedUserCircleIcon fontSize="medium" />
        </div>
        <div className="center__icons">
          <ArticleIcon fontSize="medium" />
        </div>
      </div>
      <div className="NavBar__right">
        <img src={users.length > 0 ? users[0].picture.thumbnail : ''} alt="" />
        <p>{users.length > 0 ? users[0].name.first : ''}</p>
        <div className="right__icons">
          <AppsIcon fontSize="medium" />
        </div>
        <div className="right__icons">
          <ChatIcon fontSize="medium" />
        </div>
        <div className="right__icons">
          <NotificationsIcon fontSize="medium" />
        </div>
        <div className="right__icons">
          <ArrowDropDownIcon fontSize="medium" />
        </div>
      </div>
    </div>
  );
}
