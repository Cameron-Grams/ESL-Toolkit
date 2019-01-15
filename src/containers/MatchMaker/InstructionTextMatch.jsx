import React from 'react'

const InstructionsTextMatch = ( props ) => {
    return(
        <div className={ "instructionsModalTextDiv" }>
            <h3>Instructions</h3> 
            <p>To create Matching exercises for use testing vocabulary complete through the  following steps:</p>
            <div id="landingListDiv">  
                <ul>
                    <li>Chose a title for the exercise and enter the title into the "Exercise Title".</li>
                    <li>Enter a word in the field labeled "Word".</li>     
                    <li>Enter a definition in the field labeled "Definition".</li>     
                    <li>Advance to confirm the worksheet, return to edit as needed.</li>     
                    <li>Print the worksheet or save it as a pdf under the selection of the printer.</li>     
                </ul> 
            </div>
        </div>
    )
}

export default InstructionsTextMatch