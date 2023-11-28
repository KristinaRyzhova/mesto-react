import React from 'react';
import {useContext} from "react";
import CurrentUserContext from '../contexts/CurrentUserContext.js';
function Card({ card, onCardClick }) {

  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;

  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = ( 
    `element__like ${isLiked && 'element__like_active'}` 
  );

  function handleClick() {
    onCardClick(card);
  }

  return (
    <>
      <img src={card.link} className="element__image" alt={card.name} onClick={handleClick} />
      <div className="element__container">
        <h2 className="element__name">{card.name}</h2>
        <div className="element__likes">
          <button 
            className={cardLikeButtonClassName} 
            type="button" 
            aria-label="нравится" />
          <span className="element__like-counter">{card.likes.length}</span>
        </div>
      </div>
      {isOwn && <button 
        className="element__delite" 
        type="button" 
        aria-label="удалить" 
        onClick={handleDeleteClick} />}
    </>
  )
}

export default Card;