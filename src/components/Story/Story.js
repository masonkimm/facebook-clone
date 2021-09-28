import React from 'react';
import './Story.css';

export default function Story({ users, pictures }) {
  return (
    <>
      {pictures ? (
        <div
          className="story"
          style={{ backgroundImage: `URL(${pictures.urls.small})` }}
        >
          <img
            src={users ? users.picture.thumbnail : ''}
            alt=""
            id="userThumbnail"
          />
          <p>
            {users ? users.name.first : ''} {users ? users.name.last : ''}
          </p>
        </div>
      ) : null}
    </>
  );
}
