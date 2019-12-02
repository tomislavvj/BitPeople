import React from 'react'

const UserListItem = (props) => {
    let genderClass = ""
    if (props.user.gender === "female") {
        genderClass = 'female'
    }


    return (
        <li className={`collection-item avatar ${genderClass}`}>

            < img src={props.user.image} alt="" className="circle" />
            <div className="par">
                <p className="title">{props.user.name}</p>
                <p> <i className="tiny material-icons">email</i>{props.user.getShortMail()}<br /></p>
                <p> <i className="tiny material-icons">cake</i>{props.user.dob}
                </p>
            </div>

        </li >

    )
}


export default UserListItem