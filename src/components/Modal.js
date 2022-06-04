import React from "react";
import "./Modal.css"

function Modal({ buttonID, closeModal, clickCommit }) {
    let modalTitleText = "No Title Text";
    let modalBodyText = "No Body Text";
    if (buttonID === "SearchBtn") {
        modalTitleText = "SEARCH by ID";
        modalBodyText = "Fill in the ID, to search by ID, then COMMIT or CANCEL";
    }
    else if (buttonID === "AddBtn") {
        modalTitleText = "ADD ID Assigned";
        modalBodyText = "Fill in the fields (UserID, Title, Body) to add, then COMMIT or CANCEL";
    }
    else if (buttonID === "EditBtn"){
        modalTitleText = "EDIT by ID";
        modalBodyText = "Fill in the fields (UserID, ID, Title, Body) to edit by ID, then COMMIT or CANCEL";
    }
    else if (buttonID === "DelBtn"){
        modalTitleText = "DELETE by ID";
        modalBodyText = "Fill in ID field, to delete by ID, then COMMIT or CANCEL";
    }
    else {
        modalTitleText = "Default Title Text";
        modalBodyText = "Default Body Text";
    }
    return(      
        <div className="modalBackground">
            <div className="modalContainter">
                <div className="titleCloseBtn">
                    <button id="xBtn" onClick={() => closeModal(false)}> X </button>
                </div>
                <div className="modalTitle">
                    <h1>{modalTitleText}</h1>
                </div>
                <div className="modalBody">
                    <p>{modalBodyText}</p>
                    <label for="inputuserId">User ID:</label>
                    <input id="inputuserId" type="number"/>
                    <br></br>
                    <label for="inputId">ID:</label>
                    <input id="inputID" type="number"/>
                    <br></br>
                    <label for="inputTitle">Title:</label>
                    <input id="inputTitle" type="text"/>
                    <br></br>
                    <label for="inputBody">Body:</label>
                    <input id="inputBody" type="text"/>
                </div>
                <div className="modalFooter">
                    <button onClick={() => closeModal(false)} id="cancelBtn">Cancel</button>
                    <button onClick={(e) => 
                        clickCommit(e, buttonID,
                        document.getElementById("inputuserId").value,
                        document.getElementById("inputID").value,
                        document.getElementById("inputTitle").value,
                        document.getElementById("inputBody").value)}
                        id="commitBtn"
                    >Commit</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;