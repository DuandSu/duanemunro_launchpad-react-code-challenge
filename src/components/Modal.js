import React from "react";
import "./Modal.css"

function Modal({ buttonID, closeModal }) {
    console.log("buttonID: " + buttonID);
    let modalTitleText = "No Title Text";
    let modalBodyText = "No Body Text";
    if (buttonID === "SearchBtn") {
        modalTitleText = "SEARCH";
        modalBodyText = "Fill in the ID to search for, then COMMIT or CANCEL";
    }
    else if (buttonID === "AddBtn") {
        modalTitleText = "ADD";
        modalBodyText = "Fill in the fields to add, then COMMIT or CANCEL";
    }
    else if (buttonID === "EditBtn"){
        modalTitleText = "EDIT";
        modalBodyText = "Fill in the fields to edit, then COMMIT or CANCEL";
    }
    else if (buttonID === "DelBtn"){
        modalTitleText = "DELETE";
        modalBodyText = "Fill in ID of field to delete, then COMMIT or CANCEL";
    }
    else {
        modalTitleText = "Default Title Text";
        modalBodyText = "Default Body Text";
    }
    return(      
        <div className="modalBackground">
            <div className="modalContainter">
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)}> X </button>
                </div>
                <div className="modalTitle">
                    <h1>{modalTitleText}</h1>
                </div>
                <div className="modalBody">
                    <p>{modalBodyText}</p>
                </div>
                <div className="modalFooter">
                    <button onClick={() => closeModal(false)} id="CancelBtn">Cancel</button>
                    <button>Commit</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;