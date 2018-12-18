
export function setExercise( value ){
    return(
        {
            type: 'SET_EXERCISE',
            data: value
        }
    )
}

export function instructionsDisplay(){
    return(
        {
            type: 'CONTROL_INSTRUCTIONS',
        }
    )
}


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