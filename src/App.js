import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ExerciseList from "./components/gift-list.component";
import EditExercise from "./components/edit-gift.component";
import CreateExercise from "./components/create-gift.component";
import CreateUser from "./components/create-friend.component";



function App() {
  return (
    <Router>
        <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ExerciseList}/>
        <Route path="/edit/:id" exact component={EditExercise}/>
        <Route path="/create" exact component={CreateExercise}/>
        <Route path="/user" exact component={CreateUser}/>
      </div>
    </Router>
  );
}

export default App;
