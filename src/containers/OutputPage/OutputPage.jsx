import React from 'react'
import { connect } from 'react-redux'
import ReactToPrint from 'react-to-print'
import GenericButton from '../../components/Button'
import FormToPrint from './FormToPrint'

class OutputPage extends React.Component{

    render(){
        return(
            <div >
                <div className={ "headerDiv" }>
                    <GenericButton destination={ `/input/${ this.props.exerciseType }` }  class={ "submitButton headerButton" } buttonText={ "Return to Edit"  } />
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

export default connect( mapStateToProps, {} )( OutputPage )