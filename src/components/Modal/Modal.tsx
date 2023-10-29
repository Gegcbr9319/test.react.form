import { FC } from "react";
import style from "./Modal.module.scss"


interface IModal{
    active: boolean;
    setActive:(active: boolean) => void;
}

export const Modal: FC<IModal> =({active, setActive})=>{

    return(
        <div className={active? style.modal_active : style.modal} onClick={()=>setActive(false)}>
            <div className={active? style.modal_context_active : style.modal_context} onClick={(e) => e.stopPropagation}>
            <h2> Это случайное модальное окно </h2>
            <h3> Нажми на темное что б закрыть</h3>
            </div>
        </div>
    )
        
    
}