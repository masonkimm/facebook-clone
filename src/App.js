import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import axios from 'axios';
import { useEffect, useState } from 'react';

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
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
