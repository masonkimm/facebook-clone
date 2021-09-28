import React, { useEffect, useState } from 'react';
import './Center.css';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MoodIcon from '@mui/icons-material/Mood';
import axios from 'axios';

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
        {pictures.length > 0 ? (
          <>
            <div
              className="story"
              style={{ backgroundImage: `URL(${pictures[0].urls.small})` }}
            >
              <img
                src={users.length > 0 ? users[0].picture.thumbnail : ''}
                alt=""
                id="userThumbnail"
              />
              <p>
                {users.length > 0 ? users[0].name.first : ''}{' '}
                {users.length > 0 ? users[0].name.last : ''}
              </p>
            </div>
            <div
              className="story"
              style={{ backgroundImage: `URL(${pictures[1].urls.small})` }}
            >
              <img
                src={users.length > 0 ? users[1].picture.thumbnail : ''}
                alt=""
                id="userThumbnail"
              />
              <p>
                {users.length > 0 ? users[1].name.first : ''}{' '}
                {users.length > 0 ? users[1].name.last : ''}
              </p>
            </div>
            <div
              className="story"
              style={{ backgroundImage: `URL(${pictures[2].urls.small})` }}
            >
              <img
                src={users.length > 0 ? users[2].picture.thumbnail : ''}
                alt=""
                id="userThumbnail"
              />
              <p>
                {users.length > 0 ? users[2].name.first : ''}{' '}
                {users.length > 0 ? users[2].name.last : ''}
              </p>
            </div>
            <div
              className="story"
              style={{ backgroundImage: `URL(${pictures[3].urls.small})` }}
            >
              <img
                src={users.length > 0 ? users[3].picture.thumbnail : ''}
                alt=""
                id="userThumbnail"
              />
              <p>
                {users.length > 0 ? users[3].name.first : ''}{' '}
                {users.length > 0 ? users[3].name.last : ''}
              </p>
            </div>
          </>
        ) : null}
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
      <div className="Center__post"></div>
    </div>
  );
}
