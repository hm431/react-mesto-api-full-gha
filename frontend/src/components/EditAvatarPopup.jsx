import React from "react";
import PopupWithForm from "./PopupWithForm";


function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar}) {


    const avatarLinkRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
      //  console.log(avatarLinkRef.current.value);
        onUpdateAvatar({
                     avatar: avatarLinkRef.current.value,
        });
    }




    return (
        <PopupWithForm title="Обновить аватар"
            name="avatar"
            buttonText="Создать"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}>

            <input type="url" name="popupStatus" placeholder="Ссылка на картинку"
                className="popup__input popup__input_avatar_link" id="avatar-link" required ref={avatarLinkRef} />
            <span className="popup__error  popup__error_avatar-link"></span>

        </PopupWithForm>
    );
}

export default EditAvatarPopup;