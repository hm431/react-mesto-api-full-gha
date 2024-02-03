function ImagePopup({ card, onClose }) {

    return (
        <div className={`popup popup_element ${card ? 'popup_opened' : 'animation_close'}`}>
            <div className="popup__container popup__container_element">
                <button type="button" className="popup__close popup__close_element" onClick={onClose}></button>
                <img src={card && card.link}
                    alt={card && card.name} className="popup__img popup__img_element" />
                <h2 className="popup__text popup__text_element">{card && card.name}</h2>
            </div>
        </div>
    );
}


export default ImagePopup;