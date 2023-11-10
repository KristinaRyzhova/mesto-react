import Logo from './images/logo.svg';
import ProfileImg from './images/image.jpg';


function App() {

  return (
    <>
        <div className="page">
          {/*Секция header*/}
          <header className="header">
            <img src={Logo} alt="логотип проекта" className="header__logo" />
          </header>
          <main className="main">
            {/*Секция profile*/}
            <section className="profile">
              <button className="profile__new-avatar" type="button" />
              <img src={ProfileImg} className="profile__avatar" alt="Фото профиля" />
              <div className="profile__info">
                <div className="profile__title">
                  <h1 className="profile__name">Жак-Ив Кусто</h1>
                  <button className="profile__edit-button" type="button" aria-label="Редактировать профиль" />
                </div>
                <h2 className="profile__subtitle">Исследователь океана</h2>
              </div>
              <button className="profile__add-button" type="button" aria-label="Добавить фото" />
            </section>
            {/*place elements*/}
            <section className="elements">
              <ul className="elements__list">
              </ul>
            </section>
          </main>
          {/*Секция footer*/}
          <footer className="footer">
            <p className="footer__copyright" lang="en">
              © 2023 Mesto Russia
            </p>
          </footer>
          {/*popup open edit profile*/}
          <div className="popup" id="popup-edit-profile">
            <div className="popup__container">
              <button className="popup__close-button" type="button" aria-label="Закрыть" />
              <h2 className="popup__title">Редактировать профиль</h2>
              <form className="popup__form" name="popupEditProfileForm" noValidate>
                <input className="popup__input popup__input_type_name" id="username" type="text" name="username" placeholder="Ваше имя" minLength={2} maxLength={40} required />
                <span className="popup__error popup__error_visible" id="username-error" />
                <input className="popup__input popup__input_type_info" id="userinfo" type="text" name="userinfo" placeholder="О себе" minLength={2} maxLength={200} required />
                <span className="popup__error popup__error_visible" id="userinfo-error" />
                <button className="popup__button" type="submit" aria-label="Сохранить">Сохранить</button>
              </form>
            </div>
          </div>
          {/*popup add new-place*/}
          <div className="popup" id="popup-add-place">
            <div className="popup__container">
              <button className="popup__close-button" type="button" aria-label="Закрыть" />
              <h2 className="popup__title">Новое место</h2>
              <form className="popup__form" name="popupAddForm" noValidate>
                <input className="popup__input popup__input_type_placename" id="placename" type="text" name="placename" placeholder="Название" minLength={2} maxLength={30} required />
                <span className="popup__error popup__error_visible" id="placename-error" />
                <input className="popup__input popup__input_type_placelink" id="placelink" type="url" name="placelink" placeholder="Ссылка на картинку" required />
                <span className="popup__error popup__error_visible" id="placelink-error" />
                <button className="popup__button" type="submit" aria-label="Создать">Создать</button>
              </form>
            </div>
          </div>
          {/*попап удаления*/}
          <div className="popup" id="popup-delete">
            <div className="popup__container popup__container_delite">
              <button className="popup__close-button" type="button" aria-label="Закрыть" />
              <h2 className="popup__title">Вы уверены?</h2>
              <form className="popup__form popup__form_delite" name="deliteCard" noValidate>
                <button className="popup__button" type="submit" aria-label="Да">Да</button>
              </form>
            </div>
          </div>
          {/*попап изменения аватарки*/}
          <div className="popup" id="popup-new-avatar">
            <div className="popup__container popup__container_avatar">
              <button className="popup__close-button" type="button" aria-label="Закрыть" />
              <h2 className="popup__title">Обновить аватар</h2>
              <form className="popup__form" name="newAvatar" noValidate>
                <input className="popup__input popup__input_type_avatar" id="avatar" type="url" name="avatar" placeholder="Ссылка на аватар" required />
                <span className="popup__error popup__error_visible" id="avatar-error" />
                <button className="popup__button" type="submit" aria-label="Сохранить">Сохранить</button>
              </form>
            </div>
          </div>
          {/*попап картинки*/}
          <div className="popup popup_overley-full-image" id="popup-open-full-image">
            <div className="popup__full-image-container">
              <img src="#" alt className="popup__full-image" />
              <h2 className="popup__full-image-name" />
              <button className="popup__close-button" type="button" aria-label="Закрыть" />
            </div>
          </div>
        </div>
        {/*Секция templates*/}
        <template id="element-place-cards" />
    </>
  )
}

export default App