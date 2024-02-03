

export const popupProfil = document.querySelector('.popup_profil');
export const popupPlace = document.querySelector('.popup_place');
export const popupAvatar = document.querySelector('.popup_avatar');



export const selectorImagePopup = document.querySelector('.popup_element');
export const backgraundPlace = document.querySelector('.popup__backgraund_place');
export const backgraundProfil = document.querySelector('.popup__backgraund_profil');
export const editButton = document.querySelector('.profile__edit-button');
export const avatarChange = document.querySelector('.profile__avatar');
export const addButton = document.querySelector('.profile__add-button');
export const buttonClosePopupProfile = document.querySelector('.popup__close_profil');
export const buttonClosePopupPlace = document.querySelector('.popup__close_place');
export const buttonClosePopupElement = document.querySelector('.popup__close_element');
export const nameInput = document.querySelector('.popup__input_name_text');
export const jobInput = document.querySelector('.popup__input_status_text');
export const profileName = document.querySelector('.profile__name');
export const profileAvatar = document.querySelector('.profile__avatar');
export const profileStatusProfession = document.querySelector('.profile__status');
export const elementsTemplate = document.querySelector('#element-template').content;

//export const popupFormProfil = document.forms["profile-form"];
//export const popupFormPlace = document.forms["card-form"];

//export const savePlaсe = popupFormPlace.querySelector('.popup__save_place');
export const elementsContainer = document.querySelector('.elements');


export const nameCardInput = document.querySelector('.popup__input_place_text');
export const imgCardInput = document.querySelector('.popup__input_place_link');


export const parameters = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_active'
};
   




export const initialCards = [
    
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Привет, Олег',
      link: 'http://i.mycdn.me/getVideoPreview?id=1249246055119&idx=7&type=39&tkn=_NW90QsSqYoODDeB_0Er3DT7Dgs&fn=vid_x'
    },
    {
      name: 'Ривия',
      link: 'https://i.playground.ru/p/8v7tgGN4GiIjQXbtPw5b9A.jpeg'
    }
  ];
  
  