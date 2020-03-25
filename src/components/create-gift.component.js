import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class CreateFriend extends Component {
    constructor(props){
        super(props);

        this.onChangeFriendname = this.onChangeFriendname.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeBudget = this.onChangeBudget.bind(this);
        this.onChangeDatebought = this.onChangeDatebought.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            friendname: '',
            description: '',
            budget: 0,
            dateBought: new Date(),
            friends: []
        }
    }


    componentDidMount(){
       axios.get('http://localhost:5000/friends/')
       .then(response => {
           if(response.data.length > 0){
               this.setState({
                   friends: response.data.map(friend=>friend.friendname),
                   friendname: response.data[0].friendname
               })
           }
       })
    }

    onChangeFriendname(e){ 
        this.setState({
            friendname: e.target.value
        });
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        });
    }

    onChangeBudget(e){
        this.setState({
            budget: e.target.value
        });
    }

    onChangeDatebought(dateBought){
        this.setState({
            dateBought: dateBought
        });
    }

    onSubmit(e){
        e.preventDefault();

        const gift = {
            friendname: this.state.friendname,
            description: this.state.description,
            budget: this.state.budget,
            dateBought: this.state.dateBought
        }

        console.log(gift);

        axios.post('http://localhost:5000/gifts/add',gift).then(res=>console.log(res.data));

        window.location = '/';
    }


    render() { 
        return(
        <div>
            <h3>Create New Gift</h3> 
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label>Friend Name: </label>
                <select ref="friendInput" 
                required 
                classname="form-control" 
                value= {this.state.friendname} 
                onChange={this.onChangeFriendname}>
                {
                    this.state.friends.map(function(friend)
                    {
                    return <option
                    key={friend}
                    value={friend}>{friend}
                    </option>;
                    })
                }
                </select>
            </div>
            <div className="form-group">
                <label>Description</label>
                <input type="text"
                required
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeDescription}
                />
            </div>
            <div className="form-group">
                <label>Budget</label>
                <input type="text"
                required
                className="form-control"
                value={this.state.budget}
                onChange={this.onChangeBudget}
                />
            </div>
            <div className="form-group">
                <label>Date Bought: </label>
                <DatePicker
                selected={this.state.dateBought}
                onChange={this.onChangeDatebought}
                />
            </div>
            <div className="form-group">
                <input type="submit" value="Create Gift" className="btn btn-primary" />
            </div>    
            </form> 
        </div> 
        )
    }

}