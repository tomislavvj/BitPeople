import React from 'react'
import UserCardItem from "./UserCardItem"

const UserList = (props) => {

    const userItems = props.users.map(user => {
        return <UserCardItem user={user} />
    })

    return (
        <div class="row">
            <ul>
                {userItems}
            </ul>

        </div>

    )

}


export default UserList 