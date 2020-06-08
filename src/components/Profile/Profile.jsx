import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

import './Profile.css';




const Profile = (props) => {



  return (
    <div className="profile">
      <div className="profile__image--wrapper">
        <img className="profile__image" src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt="" />
      </div>
      <div className="profile__user">
        <ProfileInfo />
        <MyPosts posts={props.posts} />
      </div>

    </div>
  )
}

export default Profile;