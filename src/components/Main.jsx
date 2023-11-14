import React from 'react';
import api from '../utils/Api';

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  /* const [cards, setCards] = useState([]); */

const getUserInfo = () => {
  api.getUserApi()
    .then((user) => {
      setUserName(user.name);
      setUserDescription(user.about);
      setUserAvatar(user.avatar);
    }
  )
  .catch((error) => {
      console.log(error);
    }
  )
}

React.useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <main className="main">
        <section className="profile">
          <button 
            className="profile__new-avatar" 
            type="button" 
            onClick={props.onEditAvatar}
             />
          <img 
            className="profile__avatar" 
            alt="Фото профиля" 
            style={{ backgroundImage: `url(${userAvatar})` }}
          />
          <div className="profile__info">
            <div className="profile__title">
              <h1 className="profile__name">{userName}</h1>
              <button 
                className="profile__edit-button" 
                type="button" 
                aria-label="Редактировать профиль" 
                onClick={props.onEditProfile} />
            </div>
            <h2 className="profile__subtitle">{userDescription}</h2>
          </div>
          <button 
            className="profile__add-button" 
            type="button" 
            aria-label="Добавить фото" 
            onClick={props.onAddPlace}
            />
          </section>
          <section className="elements">
          <ul className="elements__list">
          </ul>
        </section>
      </main>
    </>
  )
}
  
export default Main