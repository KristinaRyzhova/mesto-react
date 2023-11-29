import React from 'react';
import PopupWithForm from './PopupWithForm.jsx';

function DeleteCardPopup({ isOpen, onClose, onLoading, card, onCardDelete }) {

  function handleSubmit(evt) {
    evt.preventDefault();
    onCardDelete(card);
  };
  
  return(
    <PopupWithForm
      name="delete" 
      title="Вы уверены?" 
      button={onLoading ? `Удаление...` : `Да`} 
      isOpen={isOpen} 
      onClose={onClose} 
      onSubmit={handleSubmit} 
    />
  );
};

export default DeleteCardPopup;