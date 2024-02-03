




 class Api {
  constructor({ url, headers, myID}) {
    this._url = url; //https://mesto.nomoreparties.co/v1/cohort-77
    this._headers = headers; //'f8a7d69d-f431-4bab-b92e-a7dc9553106e'
  }


  onError = (response) => {
    if (response.ok) {
  
      return response.json();
    } else {
      return Promise.reject(`Ошибка ${response.status} ${response.statusText}`);
    }
  }

  getCards() {
    
    return fetch(`${this._url}/cards`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-type': 'application/json'
      },
      method: 'GET',
    })
      .then((response) => {
        this.onError(response)})

  }


  getUserInfo() {
  //  console.log(this._headers);
    return fetch(`${this._url}/users/me`, {
      headers:  {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-type': 'application/json'
      },
      method: 'GET',
    })
      .then((response) => this.onError(response))
  }


  changeLike(isLike, cardId){
    if (isLike){
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-type': 'application/json'
      },
      method: 'DELETE'
    })
      .then((response) => this.onError(response))
  }
  else{
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-type': 'application/json'
      },
      method: 'PUT',
    })
      .then((response) => this.onError(response))
  }
  }
  

  addCards(cardInfo) {
    return fetch(`${this._url}/cards`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        name: cardInfo.name,
        link: cardInfo.link
      })
    })
      .then((response) => this.onError(response))
  }


  editAvatar(avatarLink){
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatarLink.avatar
      })
    })
      .then((response) => this.onError(response))
  }


  editProfil(profilData) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: profilData.name,
        about: profilData.about
      })
    })
      .then((response) => this.onError(response))

  }

  deliteCards(cardId) {

    return fetch(`${this._url}/cards/${cardId}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-type': 'application/json'
      },
      method: 'DELETE'
    })
      .then((response) => this.onError(response))
  }
  

}
 
const apiConfig = {
  url: "https://api.hm431.nomoredomainsmonster.ru",
  headers: {
    authorization: `Bearer ${localStorage.jwt}`,
    "Content-type": 'application/json'
  },
}

export const api = new Api(apiConfig);

