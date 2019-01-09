import React from 'react'

const InstructionsModal = ( props ) => {
    const thirdPara =  " pasting text with the Sentence Scramble exercise; some text from the web has symbols that break the sentences." +
    " Please check the output carefully to" +
    " ensure that it is the exercise you want. If there is a problem with the way the exercise displays, just return to editing and manually " +
    "type the words or punctuation."

    return(
        <div className={ "instructionsModalTextDiv" }>
            <h3>Instructions</h3> 
            <p>Enter the title of the exercise in the space labeled "Exercise Title". This is the text that will appear as a title on the final worksheet.</p>       
            <p>Enter the exercise text for the students by either typing in the text or copying and pasting the text from another source.</p> 
            <p>There is a <span className={ "errorMessage" } >known problem </span> with some copying and { thirdPara }</p>        
            <p>There is a limit to how many sentences can be managed at one time.  If the preview does not contain the full exercise, repeat the process with smaller portions of text.</p>
            <p>There will be a chance to confirm the layout before actually printing.  The print function can either go directly to a printer or save the worksheet in pdf format.</p> 
        </div>
    )
}

export default InstructionsModal