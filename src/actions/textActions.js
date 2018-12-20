// function for exercise control
export function setExercise( value ){
    return(
        {
            type: 'SET_EXERCISE',
            data: value
        }
    )
}

//functions for input
export function instructionsDisplay(){
    return(
        {
            type: 'CONTROL_INSTRUCTIONS',
        }
    )
}

export function registerError(){
    return(
        {
            type : 'INDICATE_ERROR'
        }
    )
}

export function loadCurrentValue( value ){
    console.log( 'in text actions with value: ', value)
    return(
        {
            type : 'LOAD_CURRENT_VALUE',
            originalText : value
        }
    )
}

export function resetValues(){
    return(
        { type : 'RESET_VALUES' }
    )
}

// functions for Scramble
export function registerSentences( values ){

    // this needs work; not capturing everything needed...
    let re = /([\w\s,'\-;$#()*@\[\]{}%^&"]+)[\.\?!]/g;
    let sentences = re[Symbol.match]( values.originalTextInput ); 

    return(
        { 
            type : 'REGISTER_TEXT',
            text : values.originalTextInput,
            sentences : sentences,
            title : values.textTitleInput
        } 
    )
}

// functions for Cloze
export function registerOriginalText( values ){

    let paragraphs = [];
    let allWordObjects = [];

    let dirtyParagraphs = values.originalTextInput.split( "\n" ); 

    let paragraphStrings = dirtyParagraphs.filter( str => str !== "" ); 

    paragraphStrings.forEach( ( paragraph, pindex ) => {
        const wordsInParagraph = paragraph.split( " " );

        const paragraphWordArray = wordsInParagraph.map( ( word, index ) => {
            let wordObject = {};

            wordObject.paragraph = pindex;
            wordObject.position = index;
            wordObject.originalWord = word;
            wordObject.displayShowing = word;
            wordObject.selected = false;
            
            allWordObjects.push( wordObject ); 
            return wordObject;
        } ); 
        paragraphs.push( paragraphWordArray ); 
        return paragraphs; 
    }); 

    const title = values.textTitleInput;

    return{
        type: actionTypes.registerOriginalText,
        data: { 
            ...values,
            title: title, 
            wordObjects: [ ...allWordObjects ],
            paragraphs: [ ...paragraphs ] 
        }
    }
};