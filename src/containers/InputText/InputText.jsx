import React from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'; 
import { loadCurrentValue } from '../../actions/textActions'
import './InputText.css'

class InputText extends React.Component{

    render(){

        return(
            <div className="overallFormDiv" >  
            <form id={ "textInputForm" } className="textForm" onSubmit={ this.props.handleSubmit } >
                <div>< Field className = "textTitle generalInput" name="textTitleInput" component={ "input" } placeholder="Exercise Title"   /></div>
                <div>< Field className = "textField generalInput" name="originalTextInput" component={ "textarea" } placeholder="Exercise Text"   /></div>
                <button className="submitButton  inputButton" type="submit" >Next Step</button>
            </form>
            </div>
        )
    }

}

InputText = reduxForm({
    form: 'textForm',
    enableReinitialize : true
})( InputText );

InputText = connect(
    ( state, props ) => {
        const initialValues = {}
        console.log( 'in input text with edit value: ', props.editValue )
        if ( props.editValue ){
            initialValues.textTitleInput = state.reducer.title; 
            initialValues.originalTextInput = state.reducer.originalText
        }
        return{ initialValues }
    }, { load: loadCurrentValue }
)( InputText )

export default InputText
 