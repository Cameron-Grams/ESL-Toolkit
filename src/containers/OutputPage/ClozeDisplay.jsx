import React from 'react';
import { connect } from 'react-redux'; 
import DisplayText from '../ClozeMaker/DisplayText'; 
import DisplayVocabulary from '../ClozeMaker/DisplayVocabulary'; 

class ClozeDisplay extends React.Component{

    render() {

        return (
        <div className="containerDiv">
            <div className={ "topControl" } ></div>
            <div className={ "clozePrintDiv" }>  
                <h2 id="finalTitle" >{ this.props.title }</h2>
                <h4>Exercise Vocabulary:</h4>
                <p  className="textToPrint">< DisplayVocabulary vocab={ this.props.vocabularyList } /></p>
                <h4>Exercise Text:</h4>
                <  DisplayText className={ "textToPrint" } allParagraphs={ this.props.paragraphs } onClick={ e => null } />
            </div>
            <div className={ "liftDiv"}></div>
        </div>
        );
    }

}

const mapStateToProps = ( state ) => ( {
    title: state.reducer.title,
    paragraphs: state.reducer.paragraphs,
    vocabularyList: state.reducer.vocabularyList
})

export default connect( mapStateToProps, {} )( ClozeDisplay ); 
