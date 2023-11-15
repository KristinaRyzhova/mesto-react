import React from 'react';

function Card({ card, onCardClick }) {

  function handleClick() {
    onCardClick(card);
  }
  return (
    <li className="element">
      <img src={card.link} className="element__image" alt={card.name} onClick={handleClick} />
        <div className="element__container">
          <h2 className="element__name">{card.name}</h2>
          <div className="element__likes">
            <button className="element__like" type="button" aria-label="нравится" />
            <span className="element__like-counter">{card.likes.length}</span>
          </div>
        </div>
        <button
          className="element__delite" 
          type="button" 
          aria-label="удалить"
        />
    </li>
  )
}

export default Card;