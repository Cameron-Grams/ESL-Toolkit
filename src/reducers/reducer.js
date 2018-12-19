const initialState = {
    exerciseType : null,
    showInstructions: false,
    showError : false,
    useCurrent : false,
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
                useCurrent : true,
                originalText : action.text,
                title : action.title,
                sentences : action.sentences,
                showError : false
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

        default:
            return { ...state }
    }
}

export default Reducer