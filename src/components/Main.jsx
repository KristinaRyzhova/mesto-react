import React from 'react';
import api from '../utils/Api';
import Card from './Card';
import {useState, useEffect} from "react";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserApi()
    .then((user) => {
      setUserName(user.name);
      setUserDescription(user.about);
      setUserAvatar(user.avatar);
    }
  )
    .catch((err) => {
      console.log(err);
    }
  )

  api.getCardsApi()
    .then((data) => {
      setCards(data)
    })
    .catch((err) => {
      console.log(err);
    })

  }, []);

  return (
    <>
      <main className="main">
        <section className="profile">
          <button 
            className="profile__new-avatar" 
            type="button" 
            onClick={onEditAvatar}
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
                onClick={onEditProfile} />
            </div>
            <h2 className="profile__subtitle">{userDescription}</h2>
          </div>
          <button 
            className="profile__add-button" 
            type="button" 
            aria-label="Добавить фото" 
            onClick={onAddPlace}
          />
        </section>
        <section className="elements">
          <ul className="elements__list">
            {cards.map((card) => (
              <Card
                key={card._id}
                card={card}
                onCardClick={onCardClick}
              />
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}
  
export default Main