import React from 'react'
import { connect } from 'react-redux'
import ReactToPrint from 'react-to-print'
import FormToPrint from './FormToPrint'
import Header from '../../components/Header'
import { resetValues } from '../../actions/textActions'

class OutputPage extends React.Component{

    render(){
        return(
            <div >
                <div className={ "headerDiv" }>
                    <Header />
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