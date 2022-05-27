import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  } 

  return (
    <li className="card">
    <img src={props.link} alt={props.name} className="card__photo" onClick={handleClick}/>
    <div className="card__description">
      <h2 className="card__heading">{props.name}</h2>
      <div className="card__like-container">
        <button type="button" className="card__like-button"></button>
        <p className="card__like-counter">{props.likes}</p>
      </div>
    </div>
    <button className="card__delete-button"></button>
  </li>
  )
}

export default Card;