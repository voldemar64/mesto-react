import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props ) {
  return(
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name={'edit'}
      title={'Редактировать профиль'}
      form={'profile_edit'}
    >
      <input name="name" type="text" minLength="2" maxLength="40" required id="name" placeholder="Имя" className="popup__input popup__input_value_name"/>
      <span className="popup__input-error name-error"></span>
      <input name="about" type="text" minLength="2" maxLength="200" required id="job" placeholder="Работа" className="popup__input popup__input_value_job"/>
      <span className="popup__input-error job-error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;