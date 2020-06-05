import React from 'react';

function Profile() {
  return (
    <div className="profile">
      <div className="profile__image">
        <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt="" />
      </div>
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

        <div className="user__new-post">
          <form action="/">
            <textarea name="textarea" id="textarea" cols="30" rows="10" defaultValue="New Post"></textarea>
            <button type="submit">Post</button>
          </form>
        </div>

        <div className="user__posts">
          <div className="user__post">1 post</div>
          <div className="user__post">2 post</div>
        </div>
      </div>

    </div>
  )
}

export default Profile;