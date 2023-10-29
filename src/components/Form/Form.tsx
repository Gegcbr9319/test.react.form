import React, { FormEvent, useEffect, useState } from "react";
import style from "./Form.module.scss";
import PhoneInput from "react-phone-number-input/input";
import { E164Number } from "libphonenumber-js/types";

export const Form = () => {
  const emptyError = "Поле не может быть пустым";
  const [name, setName] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [errorName, setErrorName] = useState(emptyError);
  const [email, setEmail] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [errorEmail, setErrorEmail] = useState(emptyError);
  const [phone, setPhone] = useState<E164Number>();
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [errorPhone, setErrorPhone] = useState(emptyError);
  const [message, setMessage] = useState("");
  const [messageDirty, setMessageDirty] = useState(false);
  const [errorMessage, setErrorMessage] = useState(emptyError);
  const [formValidation, setFormValidation] = useState(false);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    return;
  };

  const blurHandler = (e: { target: { name: string } }) => {
    switch (e.target.name) {
      case "firstName": {
        setNameDirty(true);
        break;
      }

      case "email": {
        setEmailDirty(true);
        break;
      }

      case "phone": {
        setPhoneDirty(true);
        break;
      }
      case "message": {
        setMessageDirty(true);
        break;
      }
    }
  };

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (!e.target.value) {
      setErrorName(errorMessage);
    } else {
      setErrorName("");
    }
  };

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      setErrorEmail("Недопустимый адрес");
    } else {
      setErrorEmail("");
    }
  };

  const phoneHandler = (e: React.SetStateAction<E164Number | undefined>) => {
    if (e) {
      setPhone(e);
      setErrorPhone("");
    } else setErrorPhone(errorMessage);
  };

  const messageHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    if (!e.target.value) {
      setErrorMessage(emptyError);
    } else {
      setErrorMessage("");
    }
  };

  useEffect(() => {
    if (errorName || errorEmail || errorPhone || errorMessage) {
      setFormValidation(false);
    } else {
      setFormValidation(true);
    }
  }, [errorEmail, errorMessage, errorName, errorPhone]);

  return (
    <div className={style.div_form}>
      <form onSubmit={submitHandler} className={style.form} id="form">
        <label className={style.label}>
          <p className={style.pform}>Введи ваше имя</p>
          <input
            onBlur={blurHandler}
            type="text"
            name="firstName"
            value={name}
            className={style.form_input}
            onChange={(e) => nameHandler(e)}
          />
          {nameDirty && errorName && <p className={style.error}>{errorName}</p>}
        </label>
        <label className={style.label}>
          <p className={style.pform}>Введи вашу почту</p>
          <input
            onBlur={blurHandler}
            type="email"
            name="email"
            value={email}
            className={style.form_input}
            onChange={(e) => emailHandler(e)}
          />
          {emailDirty && errorEmail && (
            <p className={style.error}>{errorEmail}</p>
          )}
        </label>
        <label className={style.label}>
          <p className={style.pform}>Введи ваш номер</p>
          <PhoneInput
            onBlur={blurHandler}
            country="BY"
            name="phone"
            value={phone}
            className={style.form_input}
            onChange={(e) => phoneHandler(e)}
          />
          {phoneDirty && errorPhone && (
            <p className={style.error}>{errorPhone}</p>
          )}
        </label>
        <label className={style.label}>
          <p className={style.pform}>Введи сообщение для нас</p>
          <textarea
            onBlur={blurHandler}
            required
            form="form"
            name="message"
            value={message}
            className={style.form_input_message}
            onChange={(e) => messageHandler(e)}
          />
          {messageDirty && errorMessage && (
            <p className={style.error}>{errorMessage}</p>
          )}
        </label>
        <input
          type="submit"
          className={style.form_button}
          disabled={!formValidation}
        />
      </form>
    </div>
  );
};
