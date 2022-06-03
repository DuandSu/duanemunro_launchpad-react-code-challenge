import React from "react";
import "./Modal.css"

function Modal({ closeModal }) {
    return(      
        <div className="modalBackground">
            <div className="modalContainter">
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)}> X </button>
                </div>
                <div className="modalTitle">
                    <h1>Are you sure you want to continue?</h1>
                </div>
                <div className="modalBody">
                    <p>The next page is awesome! You should continue!!</p>
                </div>
                <div className="modalFooter">
                    <button onClick={() => closeModal(false)} id="CancelBtn">Cancel</button>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;