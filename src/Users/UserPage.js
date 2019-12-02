import React from 'react'
import UserList from './UserList'
import { fetchUser } from '../Services/UserServices'
import UserCard from "./UserCard"
import LoadScreen from '../View/LoadScreen'
import About from './About'
import ErrorPage from '../View/ErrorPage'


class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isGrid: false,
            query: "",
            loadscreen: true,
            about: false,
            aboutHome: false

        }

    }
    componentDidMount() {
        this.loadData()

    }
    loadData = () => {
        fetchUser()
            .then(users => {
                this.setState({ users: users, loadscreen: false })
            })
    }
    changeLayout = () => {
        this.buttonStyle()
        this.setState(preState => {
            return {
                isGrid: !preState.isGrid
            }
        })
    }



    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    }

    aboutPage = () => {
        this.setState({
            about: true
        })
    }

    backHome = () => {
        this.setState({
            aboutHome: true
        })
    }




    render() {
        if (this.state.loadscreen === true) {
            return (
                <LoadScreen />
            )

        }
        const filterUsers = this.state.users.filter(user => user
            .name.toLowerCase()
            .includes(this.state.query.toLocaleLowerCase()))


        const component = this.state.isGrid
            ? <UserCard users={filterUsers} />
            : <UserList users={filterUsers} />


        const buttName = this.state.isGrid
            ? 'view_module'
            : 'view_list'


        const errorPage = filterUsers.length === 0
            ? <ErrorPage />
            : component


        const female = filterUsers.filter(user => user.gender === "female").length
        const male = filterUsers.filter(user => user.gender === "male").length

        // TODO use React router
        if (this.state.about === true)
            return <About />

        if (this.state.aboutHome === true)
            return <UserPage />





        return (
            <div >
                <div className="row formFloat">
                    <ul class="right hide-on-med-and-down iconstop">
                        <form>
                            <input
                                placeholder="Search"
                                onChange={this.handleInputChange}
                                ref={input => this.search = input}
                            />

                        </form>
                        <li><span><i onClick={() => this.aboutPage()}>About</i></span></li>
                        <li><span><i className="material-icons" onClick={() => this.changeLayout()}>view_list</i></span></li>
                        <li><span><i className="material-icons" onClick={() => this.loadData()}>refresh</i></span></li>
                    </ul>
                </div>
                <div className="row">
                    <ul>
                        <li className="counterGender">{`Male:${male} Female:${female}`}</li>
                    </ul>
                </div>
                {component}
                {errorPage}
            </div>
        )

    }
}
export default UserPage