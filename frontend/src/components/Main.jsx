import { api } from "../utils/Api";
import React, { Children, useEffect } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({ onCardClick, onEditProfile, onAddPlace, onEditAvatar, onDeliteClick, onCardLike, children }) {
    const userContext = React.useContext(CurrentUserContext);
    console.log(userContext);
    /*const [cards, changeCardsArray] = React.useState([]);

    useEffect(() =>{    


    
    api.getCards()
    .then((list)  =>{
        changeCardsArray(list);
    })
    .catch((err)=>{             //попадаем сюда если один из промисов завершится ошибкой 
        console.log(err);
         });
}, []); */






    return (
        <main className="main">
            <section className="profile">
                <button type="button" alt="Аватар" onClick={onEditAvatar} className="profile__avatar" style={{ backgroundImage: `url(${userContext.avatar})` }}>
                    <div className="profile__hover"></div>
                </button>
                <div className="profile__info" >
                    <div className="profile__name-bloc">
                        <h1 className="profile__name">{userContext.name}</h1>
                        <button type="button" onClick={onEditProfile} className="profile__edit-button"></button>
                    </div>
                    <h2 className="profile__status">{userContext.about}</h2>
                </div>
                <button type="button" onClick={onAddPlace} className="profile__add-button"></button>

            </section>
            {children}

        </main>
    );
}

export default Main;

/*
<section className="elements">
{ cards.map(card =>(
       <Card key={card._id} onCardClick={onCardClick} onDeliteClick={onDeliteClick} card={card} onCardLike={onCardLike}/>
       ))}
</section> */