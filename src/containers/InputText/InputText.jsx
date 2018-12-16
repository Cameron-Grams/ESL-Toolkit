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
    form: 'textForm'
})( InputText );

InputText = connect(
    ( state, props ) => {
        const initialValue = {}
        if ( state.reducer.originalText ){
            initialValue.originalText = state.reducer.originalText
        }
        return{ initialValue }
    }, { load: loadCurrentValue }
)( InputText )

export default InputText
 