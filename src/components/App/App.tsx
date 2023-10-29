import React, { useState } from "react";
import style from "./App.module.scss";
import { Form, Modal } from "../../components";

export const App = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className={style.App}>
      <button onClick={(e) => setModalActive(true)} className={style.button}>
        Открыть окно
      </button>
      <Form />
      <Modal active={modalActive} setActive={setModalActive}>
        <h2> Это случайное модальное окно </h2>
        <h3> Нажми на темное что б закрыть</h3>
      </Modal>
    </div>
  );
};
