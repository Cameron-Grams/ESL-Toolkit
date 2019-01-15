import React from 'react';
import { connect } from 'react-redux'; 
import ErrorPage from '../../helpers/ErrorPage'
import ScrambleDisplay from './ScrambleDisplay'
import ClozeDisplay from './ClozeDisplay'
import MatchDisplay from './MatchDisplay';


class FormToPrint extends React.Component{

    render() {
        let displayText 
        
        switch ( this.props.exerciseType){
            case( 'cloze' ):
                displayText = <ClozeDisplay /> 
                break
            case( 'scramble' ):
                displayText = <ScrambleDisplay /> 
                break 
            case( 'match' ):
                displayText = <MatchDisplay />
                break
            default:
                displayText = <ErrorPage />
        }
                         
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
