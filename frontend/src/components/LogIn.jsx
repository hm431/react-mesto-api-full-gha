import Header from "./Header";
import { useNavigate } from "react-router-dom";
import PopupWithForm from "./PlaceWithForm";
import React, { useState } from 'react';
import * as auth from '../auth.js';
import InfoTooltip from "./InfoTooltip.jsx";


function Login({ handleLogin, changerequestStatus, changeInfoPopupOpen, changeTextPopup }) {


    

   

    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formValue.email || !formValue.password) {
            return;

        }
        auth.authorize(formValue.password, formValue.email)
            .then((data) => {
                // нужно проверить, есть ли у данных jwt
                // сбросьте стейт, затем в колбэке установите
                // стейт loggedIn родительского App как true,
                // затем перенаправьте его в /diary

                changeTextPopup('Что-то пошло не так! Попробуйте ещё раз.');
                changerequestStatus(false);

                if (data.token) {
                    setFormValue({ username: '', password: '' });
                    handleLogin();
                    changeTextPopup('Вы успешно авторизировались!');
                    changerequestStatus(true);
                    navigate('/my-profile', { replace: true });
                }
                changeInfoPopupOpen(true);
                


            })
            .catch(err => {
                changeTextPopup('Что-то пошло не так! Попробуйте ещё раз.');
                changeInfoPopupOpen(true);
                changerequestStatus(false);
                console.log(err);

            });
    }




    return (
        <div className="page">
            <Header nameOfHeaderLink={'Регистрация'} linkOfHeaderLink={'/singup'} />
            <main className="main_form">
                <PopupWithForm title="Вход"
                    name="login"
                    buttonText="Войти"
                    isOpen='true'
                    onSubmit={handleSubmit}
                    tipe='authorization'
                >


                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="authorization__input authorization__input_place_text"
                        required
                        minLength="2"
                        id="email"
                        value={formValue.email}
                        onChange={handleChange} />

                    <span className="authorization__error  authorization__error_text "></span>

                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Пароль"
                        className="authorization__input authorization__input_place_link"
                        required
                        onChange={handleChange}
                        value={formValue.password}
                    />

                    <span className="authorization__error  authorization__error_url"></span>


                </PopupWithForm>
            </main>
           
        </div>
    );
}

export default Login;