import React, { FC } from "react";
import style from "./Modal.module.scss"
import { Props } from "react-phone-number-input";


interface IModal{
    active: boolean;
    setActive:(active: boolean) => void;
    children: React.ReactNode
}

export const Modal: FC<IModal> =({active, setActive, children})=>{

    return(
        <div className={active? style.modal_active : style.modal} onClick={()=>setActive(false)}>
            <div className={active? style.modal_context_active : style.modal_context} onClick={(e) => e.stopPropagation}>
                {children}
           
            </div>
        </div>
    )
        
    
}