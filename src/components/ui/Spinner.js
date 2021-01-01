import React from 'react'
import spinner from '../../img/spinner.gif'

function Spinner() {
    return (
        <div>
            <img src={spinner} alt='loading' style={{ width: 200, margin: 'auto', display: 'block'}} />
        </div>
    )
}

export default Spinner

