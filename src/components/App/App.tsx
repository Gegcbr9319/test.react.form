import React, { useState } from 'react';
import style from './App.module.scss'
import { Form, Modal } from '../../components';

export const App = () =>  {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className={style.App}>
      <button onClick={(e) =>setModalActive(true)} className={style.button}>Открыть окно</button>
    < Form />
    <Modal active={modalActive} setActive={setModalActive}/>
    </div>
   
  );
}


