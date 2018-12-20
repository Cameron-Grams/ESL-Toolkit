import React from 'react';
import { connect } from 'react-redux'; 
import {  vocabularyWord, 
          updateWordDisplay,
          resetValues           
        } from '../../actions/textActions'; 
import Header from '../../components/Header'
import AddVocabularyWords from './AddVocabularyWords'; 
import DisplayText from './DisplayText'; 
import DisplayVocabulary from './DisplayVocabulary'; 
import GenericButton from '../../components/Button';

class ClozeMaker extends React.Component{

    constructor( props ){
        super( props );
        this.recognizeWord = this.recognizeWord.bind( this ); 
        this.moreVocab = this.moreVocab.bind( this ); 
        this.goToConfirm = this.goToConfirm.bind( this ); 
    };
    
    recognizeWord( paragraphValue, positionValue ){
        let punctuation = null;
        let updatedWordObjects = this.props.wordObjects.map( singleWordObject => {
            if ( ( singleWordObject.paragraph === paragraphValue ) && ( singleWordObject.position === positionValue ) ) {
                let punctuationArray = singleWordObject.originalWord.match(/['!"#$%&\\'()*+,\-./:;<=>?@[\\\]^_`{|}~']/g,"")
                if ( punctuationArray ){
                    punctuation = punctuationArray[ 0 ];
                } else {
                    punctuation = ""; 
                }
                singleWordObject.displayShowing = '_____________' + punctuation; 
            };
            return singleWordObject; 
        })
        let targetWordObject = this.props.wordObjects.filter( possibleWord => 
            (  possibleWord.paragraph === paragraphValue && possibleWord.position === positionValue )
        )

        this.props.updateWordDisplay( updatedWordObjects );  
        this.props.vocabularyWord( targetWordObject[ 0 ].originalWord ); 
    }

    moreVocab( wordValue ){
        let newWordArray = wordValue.additionalVocabulary.split( " " );
        newWordArray.forEach( ( newWord ) => this.props.vocabularyWord( newWord ) ); 
    }

    goToConfirm(){
        this.props.history.push( 'confirm-exercise' ); 
    }

    startNew(){
        this.props.history.push( '/input/cloze' ); 
        this.props.resetValues();
    }

    render() {

        let vocab = ( this.props.vocabularyList.length >= 1 ) ? 
                  <div>
                    <h3>Text Vocbaulary:</h3>
                    <p className="displayForVocab">< DisplayVocabulary vocab={ this.props.vocabularyList } /></p>
                  </div>: null; 

        return (
            <React.Fragment> 
                <div className={ "headerDiv" }> 
                        <Header />
                        <GenericButton
                            destination={ '/confirm-exercise' }  
                            class={ "submitButton newExerciseButton" } 
                            buttonText={ "Confirm Exercise"  } >
                        </GenericButton>
                </div> 
                <div className={ "containerDiv"} > 
                    
                    <div className={ "topControl"}></div>
                        <div className={ "innerDiv inputInnerDiv shadowCentralComponent" }>
                            <h2 className={ "titleElement" }>Cloze Maker</h2>

                            < DisplayText className={ "displayTargetText"} allParagraphs={ this.props.paragraphs } onClick={ ( paragraph, position ) => this.recognizeWord( paragraph, position )}    /> 
                            { vocab }
                            < AddVocabularyWords onSubmit={ this.moreVocab } />
                        </div>
                    <div className={ "liftDiv"}></div>
                </div>
i           </React.Fragment>
        );
    }

}

const mapStateToProps = ( state ) => ( {
    paragraphs: state.reducer.paragraphs,
    wordObjects: state.reducer.wordObjects,
    vocabularyList: state.reducer.vocabularyList
})

export default connect( mapStateToProps, { vocabularyWord, updateWordDisplay, resetValues } )( ClozeMaker );