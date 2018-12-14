import React from 'react';
import { Field, reduxForm } from 'redux-form'; 
import './InputText.css'

class InputText extends React.Component{

    render(){

        return(
            <div className="overallFormDiv" >  
            <form id={ "textInputForm" } className="textForm" onSubmit={ this.props.handleSubmit } >
                <div>< Field className = "textTitle generalInput" name="textTitleInput" component={ "input" } placeholder="Exercise Title"   /></div>
                <div>< Field className = "textField generalInput" name="originalTextInput" component={ "textarea" } placeholder="Exercise Text"   /></div>
                <button className="submitButton" type="submit" >Next Step</button>
            </form>
            </div>
        )
    }

}

InputText = reduxForm({
    form: 'textForm'
})( InputText );

export default InputText