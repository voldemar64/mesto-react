import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  return(
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText={props.buttonText}
      name={'avatar'}
      title={'Обновить аватар'}
      form={'avatar'}
    >
      <input name="avatar" type="url" minLength="2" required id="avatar" placeholder="Ссылка на картинку" className="popup__input popup__input_value_avatar"/>
      <span className="popup__input-error avatar-error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;