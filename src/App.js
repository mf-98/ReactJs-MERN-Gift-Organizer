import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import GiftList from "./components/gift-list.component";
import EditGift from "./components/edit-gift.component";
import CreateGift from "./components/create-gift.component.js";
import CreateFriend from "./components/create-friend.component";

function App() {
  return (
    <Router>
        <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={GiftList}/>
        <Route path="/edit/:id" exact component={EditGift}/>
        <Route path="/create" exact component={CreateGift}/>
        <Route path="/friend" exact component={CreateFriend}/>
      </div>
    </Router>
  );
}

export default App;
