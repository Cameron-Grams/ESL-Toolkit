import React from 'react'
import { Link } from 'react-router-dom'

const GenericButton = ( props ) => {
    return(
        <Link to={ props.destination }><button className={ props.class }>{ props.buttonText }</button></Link>
    )
}

export default GenericButton