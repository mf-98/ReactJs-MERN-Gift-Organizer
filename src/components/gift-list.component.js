import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Gift = props => (
    <tr>
        <td>{props.gift.name}</td>
        <td>{props.gift.description}</td>
        <td>{props.gift.shoppingduration}</td>
        <td>{props.gift.date.substring(0,10)}</td>
        <td>
            <Link to={"/edit/"+props.gift_id}>edit</Link> | <a href="#" onClick={() => {props.gift(props.gift_id)}}>delete</a>
        </td>
    </tr>
)

export default class GiftList extends Component {
  

    constructor(props){
        super(props);

        this.deleteGift = this.deleteGift.bind(this);

        this.state = {gifts: []};
    }

    componentDidMount(){
        axios.get('http://localhost:5000/gifts/').then(response => {
            this.setState({gifts: response.data})
        })
        .catch((error) => {
            console.log(error);
        })
    } 

    deleteGift(id){
        axios.delete('http://localhost:5000/gifts/'+id)
        .then(res => console.log(res.data));
        this.setState({
            gifts: this.state.gifts.filter(el=>el._id !== id)
        })
    }

    giftList(){
        return this.state.gifts.map(currentGift => {
            return <Gift gift={currentGift} deleteGift={this.deleteGift} key={currentGift._id}/>;
        })
    }
    
    render() {
        return(
            <div>
                <h3>Logged Gifts</h3>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Shopping Duration</th>
                            <th>Bought Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.giftList()}
                    </tbody>
                </table>
            </div>
        )
    }
}

