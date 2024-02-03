import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

    const [name, setName] = React.useState('Имя');
    const [description, setDescription] = React.useState('Статус');


    // Подписка на контекст
    const currentUser = React.useContext(CurrentUserContext);

    // После загрузки текущего пользователя из API
    // его данные будут использованы в управляемых компонентах.
    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpen]);


    function handleChangeName(e) {
        setName(e.target.value);
    }


    function handleChangeStatus(e) {
        setDescription(e.target.value);
    }


    function handleSubmit(e) {
        console.log(name);
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({
            name,
            about: description,
        });
    }


    return (




        <PopupWithForm title="Редактировать профиль"
            name="profil"
            buttonText="Сохранить"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}>


            <input type="text" name="popupName" placeholder="Имя" id="name" onChange={handleChangeName}
                className="popup__input popup__input_name_text" required minLength="2" value={name || ''} />
            <span className="popup__error  popup__error_name "></span>
            <input type="text" name="popupStatus" placeholder="О себе" className="popup__input popup__input_status_text" onChange={handleChangeStatus}
                id="status" required minLength="2" value={description || ''} />
            <span className="popup__error  popup__error_status"></span>

        </PopupWithForm>



    );
}

export default EditProfilePopup;


/*
<PopupWithForm
title="Редактировать профиль"
name="profil"
buttonText="Сохранить"
isOpen={isEditProfilePopupOpen}
onClose={closeAllPopups}>

<input type="text" name="popupName" placeholder="Имя" id="name"
    className="popup__input popup__input_name_text" required minLength="2" />
<span className="popup__error  popup__error_name "></span>
<input type="text" name="popupStatus" placeholder="О себе" className="popup__input popup__input_status_text"
    id="status" required minLength="2" />
<span className="popup__error  popup__error_status"></span>

</PopupWithForm> */