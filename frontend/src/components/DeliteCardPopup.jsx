
import PlaceWithForm from "./PlaceWithForm";

function DeliteCardPopup({ isOpen, onClose, handleCardDelete, card }) {

    function handleSubmit(e) {
        e.preventDefault();
        handleCardDelete(card);
    }

    return (
        <PlaceWithForm
            title="Вы уверены?"
            buttonText="Да"
            name="delite"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            tipe='popup'/>
    );
}

export default DeliteCardPopup;