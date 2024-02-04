import { CurrentUserContext } from "../contexts/CurrentUserContext";
import React, { useEffect } from "react";

function Card({ onCardClick, card, onCardDelete, handleDeleteClick, onCardLike }) {
    const currentUser = React.useContext(CurrentUserContext);


  //  console.log(card);
  //  console.log(card.owner, currentUser._id)
  //  card.likes.some(i => console.log(i));
  console.log(card);
  //console.log(card.card.likes);
  const isLiked = card.likes.some(i => i === currentUser._id);
    
    

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = (
        `element__like-button ${isLiked && 'element__like_button_active'}`
    );;

    function handleDeleteClick() {
        onCardDelete(card);
    }

    function handleClick() {
        onCardClick(card);
    }

    function handleButtonLike() {
        console.log(card);
        onCardLike(card);
    }

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isOwn = card.owner === currentUser._id;
  
   
    // Определяем, являемся ли мы владельцем текущей карточки
   
    // Далее в разметке используем переменную для условного рендеринга
    //{isOwn && <button className='button_del' onClick={handleDeleteClick} />}

    return (

        <div className="element">
            <img src={card.link} alt={card.name} className="element__img" onClick={handleClick} />
            {isOwn && <button className="element__delite" onClick={handleDeleteClick} />}
            <div className="element__text">
                <h2 className="element__header">{card.name}</h2>
                <div className="element__like">
                    <button type="button" className={`element__like_button ${cardLikeButtonClassName}`} onClick={handleButtonLike}></button>
                    <h3 className="element__like_number">{card.likes.length}</h3>
                </div>
            </div>
        </div>
    )
}


export default Card;