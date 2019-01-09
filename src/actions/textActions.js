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
export function registerText( values ){

    // this needs work; not capturing everything needed...
//    let re = /([\w\s,'\-;:$#()*@\[\]{}%^&"]+)[\.\?!]/g;
//    let sentences = re[Symbol.match]( values.originalTextInput ); 
    let inputParagraph = values.originalTextInput;
    let sentences = inputParagraph.split(/[\.!?]+\s/g);

    //cloze specific
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
    
    // return object with properties directly
    return(
        { 
            type : 'REGISTER_TEXT',
            title : values.textTitleInput,
            text : values.originalTextInput,
            paragraphs: [ ...paragraphs ],
            sentences : sentences,
            wordObjects: [ ...allWordObjects ]
        } 
    )
}

// functions for Cloze
export function vocabularyWord( selectedWord ){
    let finalWord = selectedWord.replace(/['!"#$%&\\'()*+,\-./:;<=>?@[\\\]^_`{|}~']/g,"");

    return({
        type: 'ADD_VOCABULARY',
        vocabularyList: finalWord 
    })
}; 

export function updateWordDisplay( newArrayWordObjects ){
    return( {
        type: 'UPDATE_WORD',
        wordObjects: newArrayWordObjects
    })
}
