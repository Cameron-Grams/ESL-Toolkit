import React from 'react'
import { connect } from 'react-redux'
import { resetValues } from '../actions/textActions'
import GenericButton from './Button'

class Header extends React.Component{

    render(){
        return(
            <React.Fragment> 
                <GenericButton 
                    destination={ `/` }  
                    class={ "submitButton newExerciseButton" } 
                    buttonText={ "Change Exercise"  } 
                    buttonAction={ this.props.resetValues }
                    />
                <GenericButton 
                    destination={ `/input/${ this.props.exerciseType }` }  
                    class={ "submitButton startOverButton" } 
                    buttonText={ "Start Over"  } 
                    buttonAction={ this.props.resetValues }
                    />
                <GenericButton 
                    destination={ `/input/${ this.props.exerciseType }` }  
                    class={ "submitButton editButton" } 
                    buttonText={ "Edit the Exercise"  } 
                    />
            </React.Fragment>
        )
    }
}

const mapStateToProps = ( state ) => ({
    exerciseType : state.reducer.exerciseType
})

export default connect( mapStateToProps, { resetValues } )( Header )