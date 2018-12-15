import React from 'react'
import { connect } from 'react-redux'
import {  setExercise, instructionsDisplay, registerSentences } from '../../actions/textActions'
import InputText from './InputText'
import './InputText.css'
import InstructionsModal from './InstructionsModal';

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
        this.props.history.push( '/observe-exercise' )
    }

    render(){
        let instructions = this.props.showInstructions ? 
            <div>
                <InstructionsModal />
            </div>
            :
            <div>
                <button onClick={ this.nowShowInstructions }>Show the instructions</button>
            </div>



        return(
            <div className={ "containerDiv"} > 
                <div className={ "topControl"}></div>
                <div className={ "innerDiv inputInnerDiv shadowCentralComponent" }>
                    <h2 className={ "titleElement" }>Input text</h2>
                    { instructions }
                    <InputText onSubmit={ this.registerInputText } />
                </div>
                <div className={ "liftDiv"}></div>
            </div>
        )
    }
}

const mapStateToProps = ( state ) => ({
    showInstructions : state.reducer.showInstructions
})

export default connect( mapStateToProps, { setExercise, instructionsDisplay, registerSentences } )( InputPage )