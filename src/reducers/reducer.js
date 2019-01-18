



// matchingVocab is keyed to the form producing vocabulary; [ { word: string, definition: string }, { word: string, definition: string }, ... ]

const initialState = {
    exerciseType : null,
    showInstructions: false,
    showError : false,
    useCurrent : false,
    title : "", 
    originalText : null,
    paragraphs : [],
    sentences : [],
    wordObjects : [ {} ],
    vocabularyList : [],
    matchingVocab : [] 
}

const Reducer = ( state = initialState, action) => {

    switch( action.type ){
        case( 'SET_EXERCISE' ): {
            return{
                ...state,
                exerciseType : action.data
            }
        }

        case( 'CONTROL_INSTRUCTIONS' ):{
            return{
                ...state,
                showInstructions : !state.showInstructions
            }
        }

        case( 'REGISTER_TEXT' ): {  
            return{
                ...state,
                useCurrent : true,
                showError : false,
                title : action.title,
                originalText : action.text,
                paragraphs : action.paragraphs,
                sentences : action.sentences,
                wordObjects : action.wordObjects
            }
        }

        case( 'INDICATE_ERROR' ): {
            return{
                ...state,
                showError : true
            }
        }

        case( 'LOAD_CURRENT_VALUE' ): {
            return{
                ...state,
                originalText : action.value
            }
        }

        case( 'RESET_VALUES' ):{
            return{
                ...initialState
            }
        }

        case( 'ADD_VOCABULARY' ): {
            return{
                ...state,
                vocabularyList : [ ...state.vocabularyList, action.vocabularyList ]
            }
        }

        case( 'UPDATE_WORD' ): {
            return{
                ...state,
                wordObjects : action.wordObjects
            }
        }

        case( 'REGISTER_MATCH' ): {
            console.log( 'in reducer with the values: ', action.data.vocabulary )
            return{
                ...state,
                matchingVocab : action.data.vocabulary
            }
        }

        default:
            return { ...state }
    }
}

export default Reducer