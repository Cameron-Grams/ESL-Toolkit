import React from 'react'
import { connect } from 'react-redux'
import { registerError, instructionsDisplay, registerMatch } from '../../actions/textActions'
import Modal from '../../components/Modal'
import InputMatched from './InputMatched'
import './MatchText.css'
import InstructionTextMatch from './InstructionTextMatch';

class InputPage extends React.Component{
    constructor( props ){
        super( props )
        this.nowShowInstructions = this.nowShowInstructions.bind( this )
    }
    
    componentDidMount(){
    }

    nowShowInstructions(){
        this.props.instructionsDisplay()
    }

    registerMatch = ( values ) => {
        console.log( 'In Match Maker with values: ', values )
        if( values.hobby && ( values.hobby !== " " )) {
            this.props.registerMatch( values )
            this.props.history.push( "/confirm-exercise" )
        } else {
            this.props.registerError()
        }
    }

    render(){
        let instructions = <Modal handleClose={ this.nowShowInstructions } show={ this.props.showInstructions } >
                                <InstructionTextMatch />  
                             </Modal> 
                    
        let indicateError = this.props.showError ? <h3 className={ "errorMessage" }>Please Enter Text</h3> : null

        return(
            <div className={ "containerDiv"} > 
                <div className={ "topControl"}></div>
                <div className={ "innerDiv inputInnerDiv shadowCentralComponent" }>
                    <h2 className={ "titleElement" }>Input Words and Definitions</h2>
                    { indicateError }
                    <button className="submitButton  inputButton" onClick={ this.nowShowInstructions }>Show Instructions</button>
                    < InputMatched onSubmit={ this.registerMatch } />
                </div>
                { instructions }
                <div className={ "liftDiv"}></div>
            </div>
        )
    }
}

const mapStateToProps = ( state ) => ({
    showError : state.reducer.showError,
    showInstructions : state.reducer.showInstructions
})

export default connect( mapStateToProps, { registerError, instructionsDisplay, registerMatch } )( InputPage )


/* build the input for the field array  https://redux-form.com/8.1.0/examples/fieldarrays/  */