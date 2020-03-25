import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class EditGift extends Component {
    constructor(props){
        super(props);

        this.onChangeFriendname = this.onChangeFriendname.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeBudget = this.onChangeBudget.bind(this);
        this.onChangeBoughtDate = this.onChangeBoughtDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            friendname: '',
            description: '',
            budget: 0,
            boughtDate: new Date(),
            friends: []
        }
    }


    componentDidMount(){

        axios.get('https://localhost:5000/gifts/'+this.props.match.params.id)
        .then(response => {
            this.setState({
                friendname:response.data.friendname,
                description: response.data.description,
                budget: response.data.budget,
                dateBought: new Date (response.data.dateBought)
            })
        })


       axios.get('http://localhost:5000/friends/')
       .then(response => {
           if(response.data.length > 0){
               this.setState({
                   friends: response.data.map(friend=>friend.friendname),
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

    onChangeBoughtDate(dateBought){
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
            date: this.state.date
        }

        console.log(gift);

        axios.post('http://localhost:5000/gifts/update'+this.props.match.params.id,gift)
        .then(res=>console.log(res.data));

        window.location = '/';
    }


    render() { 
        return(
        <div>
            <h3>Edit Gifts</h3> 
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label>Friend Name: </label>
                <select ref="friendInput" 
                required 
                className="form-control" 
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
                <label>Bought Date: </label>
                <DatePicker
                selected={this.state.dateBought}
                onChange={this.onChangeBoughtDate}
                />
            </div>
            <div className="form-group">
                <input type="submit" value="Edit Gift" className="btn btn-primary" />
            </div>    
            </form> 
        </div> 
        )
    }

}