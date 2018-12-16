import React from 'react'

const Modal = ( { handleClose, show, children } ) => {

    const showHideClassName = show ? "modal display-block" : "modal display-none"

    return(
        <div className= { showHideClassName } >
            < section className="main-modal" >
              { children }
               <button className={ "submitButton modalButton" } onClick={ handleClose } >Close the Modal</button> 
            </section>
        </div>
    )
}

export default Modal