import React from 'react'
import { connect } from 'react-redux'
import ReactToPrint from 'react-to-print'
import GenericButton from '../../components/Button'
import FormToPrint from './FormToPrint'
import { resetValues } from '../../actions/textActions'

class OutputPage extends React.Component{

    render(){
        return(
            <div >
                <div className={ "headerDiv" }>
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
                    <ReactToPrint
                        trigger={() => <div ><button className="headerButton submitButton" >Print this form</ button ></div> }
                        content={() => this.componentRef}
                    />
                </div>
                <FormToPrint ref={el => (this.componentRef = el)} />
            </div>
        )    
    }
}

const mapStateToProps = ( state ) => ({
    exerciseType : state.reducer.exerciseType
})

export default connect( mapStateToProps, { resetValues } )( OutputPage )