
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Profile from './Profile';
import Register from './Register';
import Login from './LogIn';
import ProtectedRoute from './ProtectedRoute';
import InfoTooltip from './InfoTooltip'



const App = () => {

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('jwt'));

  const handleLogin = () => {
    setLoggedIn(true);
  }


  const [requestStatus, changerequestStatus] = React.useState(false);
  const [isInfoPopupOpen, changeInfoPopupOpen] = React.useState(false);


  const [textPopup, changeTextPopup] = React.useState('');

  function closePopup() {
    changeInfoPopupOpen(false);
  }


  return (


    <>

      <InfoTooltip isSucsess={requestStatus} isOpen={isInfoPopupOpen} onClose={closePopup} textPopup={textPopup} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={loggedIn ? <Navigate to="/my-profile" replace /> : <Navigate to="/login" replace />} />

          <Route
            path="/my-profile"
            element={<ProtectedRoute
              loggedIn={loggedIn}
              element={Profile} />} />

          <Route
            path="/singUp"
            element={<Register
              handleLogin={handleLogin}
              changerequestStatus={changerequestStatus}
              changeTextPopup={changeTextPopup}
              changeInfoPopupOpen={changeInfoPopupOpen} />} />

          <Route
            path="/login"
            element={<Login
              handleLogin={handleLogin}
              changerequestStatus={changerequestStatus}
              changeTextPopup={changeTextPopup}
              changeInfoPopupOpen={changeInfoPopupOpen} />} />
              
        </Routes>

      </BrowserRouter>



    </>
  );

}


export default App;


