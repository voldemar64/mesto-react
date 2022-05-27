function ImagePopup(props) {
  return (
    <article className={`popup popup_form_fullscreen ${props.card ? 'popup_opened' : ''}`}>
      <div className="popup__fullscreen-container">
        <img src={props.card ? props.card.link : ''} alt={props.card ? props.card.name : ''} className="popup__image"/>
        <p className="popup__subtitle"></p>
        <button type="button" className="popup__close-button" onClick={props.onClose}/>
      </div>
    </article>
  )
}

export default ImagePopup;