import React, { Component } from 'react';
import { withRouter } from 'react-router';
import store from '../../store';
import style from './style.css';
import Axios from 'axios';
import { logoutUser } from '../../common/session/action';

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userDetails: [],
            dataFetched: false
        };
    }

    componentDidMount() {
        Axios.get('https://my-json-server.typicode.com/Akshata-Ambi/user-info-dashboard-mock-data/user')
            .then(response=> this.setState({
                userDetails: response.data,
                dataFetched: true
            }));
    }
     
    logout = () => {
        const { history: { push } } = this.props;
        // Removing user data from localStorage
        localStorage.removeItem('user');
        // updating redux store
        store.dispatch(logoutUser());
        // Redirecting to login page
        push('/login');
    }

    render() {
        const { userDetails, dataFetched } = this.state;
        const userInfo =  userDetails.map( user => <tr className={style.row} key={user.id}>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>{user.email}</td>
            <td>{user.phoneNo}</td>
        </tr>);
        return (
            <div className="container">
                <h1 className="text-center mb-4">User Details</h1>
                <table className="table table-bordered mx-auto">
                    {dataFetched && <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Gender</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Phone No</th>
                        </tr>
                    </thead>}
                    <tbody>
                        {userInfo}
                    </tbody>
                </table>
                {dataFetched && <button className="btn btn-primary" onClick={this.logout}>Logout</button>}
                {!dataFetched && <h3 className="text-center my-2">Fetching user details</h3>}
            </div>
        );
    }
}

export default withRouter(HomePage);