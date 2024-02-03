import React from "react";
import PlaceWithForm from "./PlaceWithForm";


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
        <PlaceWithForm title="Обновить аватар"
            name="avatar"
            buttonText="Создать"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            tipe='popup'>

            <input type="url" name="popupStatus" placeholder="Ссылка на картинку"
                className="popup__input popup__input_avatar_link" id="avatar-link" required ref={avatarLinkRef} />
            <span className="popup__error  popup__error_avatar-link"></span>

        </PlaceWithForm>
    );
}

export default EditAvatarPopup;