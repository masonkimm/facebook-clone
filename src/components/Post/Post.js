import React from 'react';
import './Post.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import IosShareIcon from '@mui/icons-material/IosShare';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function Post({ users, pictures }) {
  return (
    <div className="post">
      <div className="post__heading">
        <img src={users ? users.picture.thumbnail : ''} alt="" />
        <div className="heading__info">
          <h4>
            {users ? users.name.first : ''} {users ? users.name.last : ''}
          </h4>
          <p>1 day ago</p>
        </div>
      </div>
      <div className="post__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        <img src={pictures ? pictures.urls.small : ''} alt="" />
      </div>
      <div className="post__footer">
        <div className="footer__top">
          <div className="top__left">
            <EmojiEmotionsIcon />
            <p>769</p>
          </div>
          <div className="top__right">
            <p>89 comments</p>
            <p>30 shares</p>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="bottom__item">
            <ThumbUpIcon style={{ color: 'gray' }} />
            <p>Like</p>
          </div>
          <div className="bottom__item">
            <ChatBubbleIcon />
            <p>Comment</p>
          </div>
          <div className="bottom__item">
            <IosShareIcon />
            <p>Share</p>
          </div>
        </div>
      </div>
    </div>
  );
}
