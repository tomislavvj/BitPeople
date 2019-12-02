import React from 'react'
import UserListItem from './UserListItem'

const UserList = (props) => {

    const userItems = props.users.map(user => {
        return <UserListItem user={user} />
    })

    return (
        <ul >
            {userItems}
        </ul>
    )

}


export default UserList 