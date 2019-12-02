
import User from '../Users/User'

const fetchUser = () => {
    const url = 'https://randomuser.me/api/?results=15'


    return fetch(url)
        .then(res => res.json())
        .then(data => {

            const MyUsers = data.results.map(userData => {
                return new User(userData)
            })
            return MyUsers
        })

}

export { fetchUser }