import React from 'react'

const ErrorPage = (props) => {
    return (
        <div>
            <div>
                <i className="large material-icons sad">mood_bad</i>
                <p className="error">We couldn't find any people matching your search</p>
            </div>
        </div>
    )
}


export default ErrorPage