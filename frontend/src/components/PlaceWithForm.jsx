

function PlaceWithForm({ title, name, buttonText, children, isOpen, onClose, onSubmit, isForAuthorization, tipe }) {


    

    return (
        <div className={`${tipe} ${tipe}_${name} ${isOpen ? 'popup_opened' : 'animation_close'}`}>
            <div className={`${tipe}__container ${tipe}__container_edit`}>
            { tipe === 'popup' &&
                <button type="button" onClick={onClose} className={`${tipe}__close ${tipe}__close_${name}`}></button>
}
             <h2 className={`${tipe}__header`}>{title}</h2>
                <form action="#"  className={`${tipe}__form`}  onSubmit={onSubmit}>
                    {children}
                    <button type="submit" className={`${tipe}__save ${tipe}__save_${name}`}>{buttonText}</button>
                </form>
            </div>

        </div>
    );
}

export default PlaceWithForm;