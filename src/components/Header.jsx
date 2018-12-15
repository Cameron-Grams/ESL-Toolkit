import React from 'react'
import { connect } from 'react-redux'
import GenericButton from './Button'

class Header extends React.Component{

    render(){
        return(
            <div className={ "headerDiv" }>
                <GenericButton destination={ `/input/${ this.props.exerciseType }` }  class={ "submitButton headerButton" } buttonText={ "Re-do"  } />
                <GenericButton destination={ "" }  class={ "submitButton headerButton" } buttonText={ "Confirm Exercise" } />           
            </div>
        )
    }
}

const mapStateToProps = ( state ) => ({
    exerciseType : state.reducer.exerciseType
})

export default connect( mapStateToProps, {} )( Header )