import React from 'react';
import {useState} from 'react';
import PopupWithForm from './PopupWithForm.jsx';

function AddPlacePopup({ isOpen, onClose, onAddPlace, onLoading }) {
  const [nameNewCard, setNameNewCard] = useState("");
  const [linkNewCard, setLinkNewCard] = useState("");
    
  function handleNewCardNameChange(evt) {
    setNameNewCard(evt.target.value);
  };

  function handleNewCardLinkChange(evt) {
    setLinkNewCard(evt.target.value);
  };

  function handleAddNewCardSubmit(evt) {
    evt.preventDefault();
    onAddPlace({
      name: nameNewCard, 
      link: linkNewCard
    });
  };

  return (
    <PopupWithForm
      name="add-place"
      title="Новое место"
      button={onLoading ? `Создание...` : `Создать`}
      isOpen={isOpen}
      onClose={onClose} 
      onSubmit={handleAddNewCardSubmit}
    >
      <input 
        className="popup__input popup__input_type_placename" 
        id="placename" 
        type="text" 
        name="placename" 
        placeholder="Название" 
        minLength={2} 
        maxLength={30} 
        required 
        value={nameNewCard || ""} 
        onChange={handleNewCardNameChange}
      />
      <span className="popup__error popup__error_visible" id="placename-error" />
      <input 
        className="popup__input popup__input_type_placelink" 
        id="placelink" 
        type="url" 
        name="placelink" 
        placeholder="Ссылка на картинку" 
        required 
        value={linkNewCard || ""} 
        onChange={handleNewCardLinkChange}
      />
      <span className="popup__error popup__error_visible" id="placelink-error" />
    </PopupWithForm>
  )
}

export default AddPlacePopup;