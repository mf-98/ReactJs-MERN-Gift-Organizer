import React, { Component } from 'react';
import axios from 'axios';

export default class CreateFriend extends Component {
    constructor(props){
        super(props);

        this.onChangeFriendname = this.onChangeFriendname.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            friendname: '',
        }


    }

    onChangeFriendname(e){
        this.setState({
            friendname: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const friend = {
            friendname: this.state.friendname,
        }

        console.log(friend);

        axios.post('http://localhost:5000/friends/add',friend).then(res=>console.log(res.data));

        this.setState({
            friendname: '',
        })
    }
    
    render() {
        return(
            <div>
                <h3>Create New Friend</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="formGroup">
                        <label>Friend Name: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.friendname}
                        onChange={this.onChangeFriendname}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Friend" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}