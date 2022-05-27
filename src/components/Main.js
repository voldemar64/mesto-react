import React from "react";
import Card from "./Card";


function Main(props) {
  return (
    <main>
      <section className="profile">
        <button type="button" className="profile__edit-avatar" onClick={props.onEditAvatar}>
          <img src={props.userAvatar} alt="фото профиля" className="profile__avatar"/>
        </button>
        <div className="profile__info">
          <div className="profile__heading">
            <h1 className="profile__title">{props.userName}</h1>
            <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__subtitle">{props.userDescription}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>

      <section className="cards">
        <ul className="cards__list">
          {
            props.cards.map((card, id) => (
              <Card
                key={id}
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