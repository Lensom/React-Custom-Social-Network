import React from 'react';
import './ProfileInfo.css';

const ProfileInfo = () => {
  return (
    <div className="user">
      <div className="user__wrapper">
        <div className="user__logotype">
          <img src="https://static.apostrophe.ua/uploads/image/88ce804b60338a74c61311ff2e118297.jpg" alt="" />
        </div>
        <div className="user__info">
          <h3 className="user__name">Alexey Rybalko</h3>
          <ul className="user__list">
            <li className="user__item">Date of Birth: 24 september 1996</li>
            <li className="user__item">City: Odessa</li>
            <li className="user__item">Education: ONMU</li>
            <li className="user__item">Web Site: <a href="https://lensom.github.io/" target="_blank" rel="noopener noreferrer">https://lensom.github.io/</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;