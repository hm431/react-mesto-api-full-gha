import Header from "./Header";
import { useNavigate } from "react-router-dom";
import PopupWithForm from "./PlaceWithForm";
import React, { useState } from 'react';
import * as auth from '../auth.js';



function Register({changerequestStatus, changeInfoPopupOpen, changeTextPopup}) {





 


    function navigateToLogIn() {
        navigate('/login');
    }

    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        auth.register(formValue.password, formValue.email)
            .then(() => {
                changeTextPopup('Вы успешно зарегистрировались!');
                changerequestStatus(true);
                changeInfoPopupOpen(true);
                navigate('/login');
            })
            .catch((err) => {
                changeTextPopup('Что-то пошло не так! Попробуйте ещё раз.');
                changerequestStatus(false);
                changeInfoPopupOpen(true);
                console.log(err);
            });
    }


    return (
        <div className="page">
            <Header nameOfHeaderLink={'Войти'} linkOfHeaderLink={'/login'} />
            <main className="main_form">
                <PopupWithForm title="Регистрация"
                    name="register"
                    buttonText="Зарегистрироваться"
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

                <button onClick={navigateToLogIn} className='register__button_text'> Уже зарегистрированы? Войти </button>


                </main>
          
        </div>


    );
}

export default Register;