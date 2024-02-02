import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onUpdateCard }) {


    const [name, setNameCard] = React.useState('');
    const [link, setlink] = React.useState('');

    function handleChangeName(e) {
        setNameCard(e.target.value);
    }


    function handleChangeImage(e) {
        setlink(e.target.value);
    }


    function handleSubmit(e) {

        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateCard({
            name,
            link: link,
            likes: [],
        });
    }



    return (
        <PopupWithForm
            title="Новое место"
            name="place"
            buttonText="Сохранить"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}>

            <input type="text" name="popupName" placeholder="Название" className="popup__input popup__input_place_text"
                required minLength="2" id="text" onChange={handleChangeName} value={name} />

            <span className="popup__error  popup__error_text "></span>

            <input type="url" name="popupStatus" placeholder="Ссылка на картинку"
                className="popup__input popup__input_place_link" id="url" required onChange={handleChangeImage} value={link} />

            <span className="popup__error  popup__error_url"></span>
        </PopupWithForm>
    );
}


export default AddPlacePopup;