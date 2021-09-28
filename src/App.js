import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import RightSideBar from './components/RightSideBar/RightSideBar';
import LeftSideBar from './components/LeftSideBar/LeftSideBar';
import Center from './components/Center/Center';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () =>
      await axios.get('https://randomuser.me/api/?results=15').then((res) => {
        setUsers(res.data.results);
      });
    fetchData();
  }, []);

  return (
    <div className="App">
      <NavBar users={users} />
      <div className="App__body">
        <LeftSideBar />
        <Center />
        <RightSideBar users={users} />
      </div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
