import React ,{useState} from 'react'
import { Link } from 'react-router-dom'

const Error = (props) => {

    return (
          
        <div className='text-light p-5'>
            Nothing found with a search of '{props.id}'
        </div>

    )
}

export default Error