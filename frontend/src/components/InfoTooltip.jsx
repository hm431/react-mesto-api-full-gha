import logoSuccessfull from '../images/Authorization__successful.svg';
import logoFaild from '../images/Authorization__failed.svg'; 
import React, { useEffect } from 'react';



function InfoTooltip({ isOpen, isSucsess,  onClose, textPopup}) {

    const [imageForPopup, changeImageForPopup] = React.useState(logoSuccessfull);
    


    useEffect(() =>{
        if (!isSucsess){       
            changeImageForPopup(logoFaild);
        }
        else{
            changeImageForPopup(logoSuccessfull);
        }
    })

    return (
        <div className={`popup popup_info ${isOpen ? 'popup_opened' : 'animation_close'}`}>
            <div className={`popup__container popup__container_edit`}>
                <button type="button" onClick={onClose} className={`popup__close popup__close_info`}></button>
                <img className='popup____log-in_is-ok' src={imageForPopup}/>
                <span className='popup__text'>{textPopup}</span>
            </div>
        </div>
    );
}

export default InfoTooltip;