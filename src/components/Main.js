import React from "react";
import Card from "./Card";
import api from '../utils/Api.js';


function Main(props) {
  const [userName, setUserName] = React.useState('')
  const [userDescription, setUserDescription] = React.useState('')
  const [userAvatar, setUserAvatar] = React.useState('')
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, cards]) => {
      setUserName(userData.name)
      setUserDescription(userData.about)
      setUserAvatar(userData.avatar)
      setCards(cards)
    })
    .catch(err => console.log(`Ошибка при изначальной отрисовке данных: ${err}`));
  }, [])

  return (
    <main>
      <section className="profile">
        <button type="button" className="profile__edit-avatar" onClick={props.onEditAvatar}>
          <img src={userAvatar} alt="фото профиля" className="profile__avatar"/>
        </button>
        <div className="profile__info">
          <div className="profile__heading">
            <h1 className="profile__title">{userName}</h1>
            <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>

      <section className="cards">
        <ul className="cards__list">
          {
            cards.map(card => (
              <Card
                key={card._id}
                card={card}
                name={card.name}
                link={card.link}
                likes={card.likes.length}
                onCardClick={props.onCardClick}
              />
            ))
          }
        </ul>
      </section>
    </main>
  )
}

export default Main;