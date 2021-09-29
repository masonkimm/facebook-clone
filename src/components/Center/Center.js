import React, { useEffect, useState } from 'react';
import './Center.css';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MoodIcon from '@mui/icons-material/Mood';
import axios from 'axios';
import Post from '../Post/Post';
import Story from '../Story/Story';

export default function Center({ users }) {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://api.unsplash.com/search/photos?query=random&client_id=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
          const newData = [...res.data.results];
          setPictures(newData);
        });
    };
    fetchData();
  }, []);

  console.log(pictures);
  return (
    <div className="Center" key={users}>
      <div className="Center__stories">
        <Story users={users[0]} pictures={pictures[0]} />
        <Story users={users[1]} pictures={pictures[1]} />
        <Story users={users[2]} pictures={pictures[2]} />
        <Story users={users[3]} pictures={pictures[3]} />
        <Story users={users[4]} pictures={pictures[4]} />
        <Story users={users[5]} pictures={pictures[5]} />
        <Story users={users[6]} pictures={pictures[6]} />
        <Story users={users[7]} pictures={pictures[7]} />
        <Story users={users[8]} pictures={pictures[8]} />
        <Story users={users[9]} pictures={pictures[9]} />
      </div>

      <div className="Center__status">
        <div className="status__topRow">
          <img
            src={users.length > 0 ? users[0].picture.thumbnail : ''}
            alt=""
          />
          <div className="topRow__input">
            <input
              type="text"
              placeholder={`What's on your mind, ${
                users.length > 0 ? users[0].name.first : ''
              }?`}
            />
          </div>
        </div>
        <div className="status__bottomRow">
          <div className="bottomRow__icons">
            <PhotoLibraryIcon />
            <p>Photo/Video</p>
          </div>
          <div className="bottomRow__icons">
            <PersonAddIcon />
            <p>Tag Friends</p>
          </div>
          <div className="bottomRow__icons">
            <MoodIcon />
            <p>Feeling/Activity</p>
          </div>
        </div>
      </div>
      <div className="Center__post">
        <Post users={users[0]} pictures={pictures[0]} />
        <Post users={users[1]} pictures={pictures[1]} />
        <Post users={users[2]} pictures={pictures[2]} />
        <Post users={users[3]} pictures={pictures[3]} />
      </div>
    </div>
  );
}
