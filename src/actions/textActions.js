export function setExercise( value ){
    return(
        {
            type: 'SET_EXERCISE',
            data: value
        }
    )
}








export function registerSentences( values ){

    // this needs work; not capturing everything needed...
    let re = /([\w\s,'\-;]+)[\.\?!]/g;
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