import React from 'react';
import { connect } from 'react-redux'; 
import ScrambleDisplay from './ScrambleDisplay'
import ClozeDisplay from './ClozeDisplay'


class FormToPrint extends React.Component{

    render() {
        let displayText = ( this.props.exerciseType === "cloze" ) ? <ClozeDisplay /> :
                          <ScrambleDisplay /> 

        return (
        <div className="finalForm">
            <div id="printComponentDiv">  
                { displayText }
            </div>
        </div>
        );
    }

}

const mapStateToProps = ( state ) => ( {
    title: state.reducer.title,
    exerciseType : state.reducer.exerciseType
})

export default connect( mapStateToProps, {} )( FormToPrint ); 
