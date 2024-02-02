
import PopupWithForm from "./PopupWithForm";

function DeliteCardPopup({ isOpen, onClose, handleCardDelete, card }) {

    function handleSubmit(e) {
        e.preventDefault();
        handleCardDelete(card);
    }

    return (
        <PopupWithForm
            title="Вы уверены?"
            buttonText="Да"
            name="delite"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}/>
    );
}

export default DeliteCardPopup;