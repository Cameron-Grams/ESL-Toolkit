import React from 'react'
import { connect } from 'react-redux'
import shuffleArray from '../../helpers/shuffleArray'
import Header from '../../components/Header'

class OutputPage extends React.Component{

    render(){
        const shuffledArray = shuffleArray.random( this.props.text.sentences )

        const outputSentences = shuffledArray.map( ( sentence, index ) => {
            return(
                <div className={ "outputSentenceDiv" } > 
                    <div className={ "outputSentenceNumberBox" }></div>
                    <p className={ "outputeSentence" } key={ index } >{ sentence } </p>
                </div>
            )
        })

        return(
            <div className={ "containerDiv" }>
                <div className={ "topControl"}>
                    <Header />
                </div>
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
    text : state.reducer
})

export default connect( mapStateToProps, {} )( OutputPage )