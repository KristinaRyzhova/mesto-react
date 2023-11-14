import React from 'react';

function ImagePopup(props) {
  return (
    <div className="popup popup_overley-full-image" id="popup-open-full-image">
          <div className="popup__full-image-container">
            <img src="#" alt className="popup__full-image" />
            <h2 className="popup__full-image-name" />
            <button className="popup__close-button" type="button" aria-label="Закрыть" />
          </div>
          </div>
  )
}

export default ImagePopup;