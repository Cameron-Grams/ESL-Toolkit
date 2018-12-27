import React from 'react'
import { connect } from 'react-redux'

class MatchMaker extends React.Component{


    render(){
        return(
            <div>Match Maker</div>
        )
    }
}

const mapStateToProps = ( state ) => ({
    ...state
})

export default connect( mapStateToProps, {} )( MatchMaker )