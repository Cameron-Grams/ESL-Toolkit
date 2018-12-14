import React from 'react'
import { Link } from 'react-router-dom'
import './Main.css'

class Main extends React.Component{


    render(){
        return(
            <div className={ "containerDiv"}> 
                <div className={ "topControl"}></div>
                <div className={ "innerDiv mainInnerDiv shadowCentralComponent"}>
                    <h3 className={ "mainTitle" } >ESL Teacher's Toolkit</h3>
                    <p>Select the type of exercise to build:</p>
                    <Link to={ "/input/cloze" }><button className={ "submitButton"}>Cloze Exercise</button></Link><br></br>
                    <Link to={ "/input/scramble" }><button className={ "submitButton"} >Sentence Scramble Exercise</button></Link>
                </div>
                <div className={ "liftDiv"}></div>
            </div>
        )
    }
}

export default Main