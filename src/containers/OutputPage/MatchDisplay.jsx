import React from 'react';
import { connect } from 'react-redux'; 

class MatchDisplay extends React.Component{

    render() {

        return (
        <div className="containerDiv">
            <div className={ "topControl" } ></div>
            <div className={ "clozePrintDiv" }>  
                <h2 id="finalTitle" >{ this.props.title }</h2>
                <h4>Matching Exercise:</h4>
                {  /* mechanism to display columns... */} 
            </div>
            <div className={ "liftDiv"}></div>
        </div>
        );
    }

}

const mapStateToProps = ( state ) => ( {
    title: state.reducer.title,
})

export default connect( mapStateToProps, {} )( MatchDisplay ); 

