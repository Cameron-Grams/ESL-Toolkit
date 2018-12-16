import React from 'react'




const InstructionsTextCloze = ( props ) => {
    return(
        <div className={ "instructionsModalTextDiv" }>
            <h3>Instructions</h3> 
            <p>This site can create Cloze ( fill in the blank ) exercises for use testing vocabulary.  Advance through the pages
                and complete the following steps:</p>
            <div id="landingListDiv">  
            <ul>
               <li>Chose a title for the exercise and enter the title into the "Exercise Title".</li>
               <li>Copy and paste or type original text into the "Exercise Text" area and advance to Build the Cloze.</li>     
               <li>Select the words to remove from the original text and add to the vocabulary words.</li>     
               <li>Add additional vocabulary words that students can consider for the exercise, such as synonyms.</li>     
               <li>Advance to observe the exercise worksheet, return to edit or confirm print.</li>     
               <li>Print the worksheet or save it as a pdf under the selection of the printer.</li>     
            </ul> 
            </div>
        </div>
    )
}

export default InstructionsTextCloze