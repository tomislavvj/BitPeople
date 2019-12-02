import React from 'react'

const UserCardItem = (props) => {
    return (

        <div class="col s12 m4">
            <div class="card">
                <div class="card-image">
                    <img src={props.user.imgLar} />
                    <span class="card-title">{props.user.name}</span>
                </div>
                <div class="card-content">
                    <p>Email: {props.user.getShortMail()}</p>
                    <p>Date of birth: {props.user.dob}</p>
                </div>

            </div>
        </div>


    )
}
export default UserCardItem