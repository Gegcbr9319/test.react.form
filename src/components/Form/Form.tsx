import React, { useState } from "react";
import style from "./Form.module.scss";
import PhoneInput from "react-phone-number-input/input";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState("");

  const submitHandler = () => {
    return;
  };

  return (
    <div className={style.div_form}>
      <form onSubmit={submitHandler} className={style.form}>
        <label className={style.label}>
          <p className={style.pform}>Введи ваше имя</p>
          <input
            type="text"
            value={name}
            className={style.form_input}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className={style.label}>
          <p className={style.pform}>Введи вашу почту</p>
          <input
            type="email"
            value={email}
            className={style.form_input}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className={style.label}>
          <p className={style.pform}>Введи ваш номер</p>
          <PhoneInput
            country="BY"
            value={phone}
            className={style.form_input}
            onChange={() => setPhone}
          />
        </label>
        <label className={style.label}>
          <p className={style.pform}>Введи сообщение для нас</p>
          <textarea
            
            value={message}
            className={style.form_input_message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <input type="submit" className={style.form_button} />
      </form>
    </div>
  );
};
