import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  return(
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText={props.buttonText}
      name={'add'}
      title={'Новое место'}
      form={'add_pic'}
    >
      <input name="name" type="text" minLength="2" maxLength="30" required id="title" placeholder="Название" className="popup__input popup__input_value_title"/>
      <span className="popup__input-error title-error"></span>
      <input name="link" type="url" required id="link" placeholder="Ссылка на картинку" className="popup__input popup__input_value_link"/>
      <span className="popup__input-error link-error"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;