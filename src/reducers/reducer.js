const initialState = {
    exerciseType : null,
    showInstructions: false,
    title : "", 
    originalText : null,
    sentences : []
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
                originalText : action.text,
                title : action.title,
                sentences : action.sentences
            }
        }

        case( 'LOAD_CURRENT_VALUE' ): {
            return{
                ...state,
                originalText : action.value
            }
        }

        default:
            return { ...state }
    }
}

export default Reducer