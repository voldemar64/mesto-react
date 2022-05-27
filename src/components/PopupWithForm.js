function PopupWithForm(props) {
  return (
    <article className={`popup popup_form_${props.name} ${props.isOpen ? `popup_opened` : ''}`}>
      <form noValidate name={props.form} action="#" className='popup__container'>
        <h2 className='popup__title'>{props.title}</h2>
        {props.children}
        <button type="submit" className="popup__submit-button">Сохранить</button>
        <button type="button" className="popup__close-button" onClick={props.onClose}/>
      </form>
    </article>
  )
}

export default PopupWithForm;