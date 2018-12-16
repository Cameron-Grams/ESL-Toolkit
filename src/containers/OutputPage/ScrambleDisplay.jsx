import React from 'react'
import { connect } from 'react-redux'
import shuffleArray from '../../helpers/shuffleArray'

class ScrambleDisplay extends React.Component{


    render(){

        const shuffledArray = shuffleArray.random( this.props.text.sentences )
        const outputSentences = shuffledArray.map( ( sentence, index ) => {
            return(
                <div key={ index }className={ "outputSentenceDiv" } > 
                    <p className={ "outputeSentence" } key={ index } >{ sentence } </p>
                </div>
            )
        })

        return(
            <div className={ "containerDiv" }>
                <div className={ "topControl"}></div>
                <div className={ "innerDiv sentenceDisplayDiv shadowCentralComponent" } >  
                    <h3>{ this.props.text.title }</h3>
                    { outputSentences }
                </div> 
                <div className={ "liftDiv"}></div>
            </div>
        )
    }
}

const mapStateToProps = ( state ) => ({
    text : state.reducer,
    title : state.reducer.title 
})

export default connect( mapStateToProps, {} )( ScrambleDisplay )