import React from 'react'
import { connect } from 'react-redux'
import {  setExercise, instructionsDisplay, registerSentences } from '../../actions/textActions'
import Modal from '../../components/Modal'
import InputText from './InputText'
import './InputText.css'
import InstructionTextCloze from './InstructionTextCloze';
import InstructionTextScramble from './InstructionTextScramble'

class InputPage extends React.Component{
    constructor( props ){
        super( props )
        this.registerExerciseType = this.registerExerciseType.bind( this )
        this.nowShowInstructions = this.nowShowInstructions.bind( this )
    }
    
    componentDidMount(){
        this.registerExerciseType()
    }



    registerExerciseType(){
        let { type } = this.props.match.params
        this.props.setExercise( type )
    }


    nowShowInstructions(){
        this.props.instructionsDisplay()
    }

    registerInputText = ( values ) => {
        this.props.registerSentences( values )
        this.props.history.push( "/confirm-exercise" )
    }

    render(){
        let instructionText = ( this.props.exerciseType === 'cloze' ) ? <InstructionTextCloze /> : <InstructionTextScramble /> 

        let instructions = <Modal handleClose={ this.nowShowInstructions } show={ this.props.showInstructions } >
                               { instructionText }  
                           </Modal> 

        return(
            <div className={ "containerDiv"} > 
                <div className={ "topControl"}></div>
                <div className={ "innerDiv inputInnerDiv shadowCentralComponent" }>
                    <h2 className={ "titleElement" }>Input text</h2>
                    <button className="submitButton  inputButton" onClick={ this.nowShowInstructions }>Show Instructions</button>
                    <InputText onSubmit={ this.registerInputText } editValue={ this.props.useCurrent } />
                </div>
                { instructions }
                <div className={ "liftDiv"}></div>
            </div>
        )
    }
}

const mapStateToProps = ( state ) => ({
    exerciseType : state.reducer.exerciseType,
    useCurrent : state.reducer.useCurrent,
    showInstructions : state.reducer.showInstructions,
    originalText : state.reducer.originalText
})

export default connect( mapStateToProps, { setExercise, instructionsDisplay, registerSentences } )( InputPage )