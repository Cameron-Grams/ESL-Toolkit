import React from 'react'
import { connect } from 'react-redux'
import {  setExercise, registerSentences } from '../../actions/textActions'
import InputText from './InputText'
import './InputText.css'

class InputPage extends React.Component{
    constructor( props ){
        super( props )
        this.registerExerciseType = this.registerExerciseType.bind( this )
    }
    
    componentDidMount(){
        this.registerExerciseType()
    }

    registerExerciseType(){
        let { type } = this.props.match.params
        this.props.setExercise( type )
    }

    registerInputText = ( values ) => {
        this.props.registerSentences( values )
        this.props.history.push( '/observe-exercise' )
    }

    render(){
        return(
            <div className={ "containerDiv"} > 
                <div className={ "topControl"}></div>
                <div className={ "innerDiv inputInnerDiv shadowCentralComponent" }>
                    <h2 className={ "titleElement" }>Input text</h2>
                    <p>Type or copy and past text to be broken in sentences and scrambled:</p>
                    <InputText onSubmit={ this.registerInputText } />
                </div>
                <div className={ "liftDiv"}></div>
            </div>
        )
    }
}

const mapStateToProps = ( state ) => ({
    ...state
})

export default connect( mapStateToProps, { setExercise, registerSentences } )( InputPage )