import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React, { useEffect } from 'react';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import Card from "./Card";
import AddPlacePopup from './AddPlacePopup';
import DeliteCardPopup from './DeliteCardPopup';

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, changeAvatarPopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, changePlasePopupOpen] = React.useState(false);

    const [isDelitePopupOpen, changeDelitePopupOpen] = React.useState(null);
    const [selectedCard, changeSelectedCard] = React.useState(null);


    //создвние стейта currentUser
    const [currentUser, changeCurrentUser] = React.useState({});

    useEffect(() => {

        api.getUserInfo()
            .then((info) => {

                changeCurrentUser(info);
                //changeCurrentUser(info.about);
                //changeCurrentUser(info.avatar);
            })
            .catch((err) => {             //попадаем сюда если один из промисов завершится ошибкой 
                console.log(err);
            })
    }, []);




    function handleCardClick(card) {
        changeSelectedCard(card);
        //   console.log(selectedCard);

    }

    function handleDeliteClick(card) {
        // console.log(card);
        changeDelitePopupOpen(card);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }


    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        changeAvatarPopupOpen(false);
        changePlasePopupOpen(false);
        changeSelectedCard(null);
        changeDelitePopupOpen(null);
    }


    function handleEditAvatarClick() {
        changeAvatarPopupOpen(true);
    }

    function handleAddPlaceClick() {
        changePlasePopupOpen(true);
    }


    function handleCardLike(card) {
        // changeSelectedCard(card);
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        api.changeLike(isLiked, card._id)
            .then((newCard) => {

                changeCardsArray((state) => state.map((c) => c._id === card._id ? newCard : c));
                //   console.log(newCard);
            })
            .catch((err) => {             //попадаем сюда если один из промисов завершится ошибкой 
                console.log(err);
            })

    }


    function handleCardDelete(card) {


        api.deliteCards(card._id)
            .then(() => {
                changeCardsArray((cards) => cards.filter((c) => c._id !== card._id))
                closeAllPopups();
            })
            .catch((err) => {             //попадаем сюда если один из промисов завершится ошибкой 
                console.log(err);
            })


    }

    function handleUpdateUser(UserInfoChange) {
        console.log(UserInfoChange);
        api.editProfil(UserInfoChange)
            .then((UserInfoChange) => {
                changeCurrentUser(UserInfoChange);
                closeAllPopups();
                console.log(currentUser);
            })
            .catch((err) => {             //попадаем сюда если один из промисов завершится ошибкой 
                console.log(err);
            })

    }


    function handleUpdateAvatar(UserAvatarChange) {

        api.editAvatar(UserAvatarChange)
            .then((UserAvatarChange) => {
                changeCurrentUser(UserAvatarChange);
                closeAllPopups();

            })
            .catch((err) => {             //попадаем сюда если один из промисов завершится ошибкой 
                console.log(err);
            })
    }

    function handleAddPlaceSubmit(newCard) {

        api.addCards(newCard)
            .then((newCard) => {
                //   changeCurrentUser(UserAvatarChange);
                changeCardsArray([newCard, ...cards]);
                closeAllPopups();

            })
            .catch((err) => {             //попадаем сюда если один из промисов завершится ошибкой 
                console.log(err);
            })
    }




    const [cards, changeCardsArray] = React.useState([]);

    useEffect(() => {



        api.getCards()
            .then((list) => {
                changeCardsArray(list);
            })
            .catch((err) => {             //попадаем сюда если один из промисов завершится ошибкой 
                console.log(err);
            });
    }, []);




    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Header />
                <Main
                    onCardClick={handleCardClick}
                    onDeliteClick={handleDeliteClick}
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardLike={handleCardLike}
                >
                    <section className="elements">
                        {cards.map(card => (
                            <Card key={card._id} onCardClick={handleCardClick} onCardDelete={handleDeliteClick} card={card} onCardLike={handleCardLike} />
                        ))}
                    </section>
                </Main>

                <Footer />

                <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
               
                <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onUpdateCard={handleAddPlaceSubmit} />
               
                <DeliteCardPopup isOpen={isDelitePopupOpen} onClose={closeAllPopups} handleCardDelete={handleCardDelete} card={isDelitePopupOpen} />
               
                <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
               
                <ImagePopup card={selectedCard} onClose={closeAllPopups} />
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;



