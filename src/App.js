import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import EditJob from "./components/EditJob.component"
import Navbar from "./components/navbar.component"
import JobsList from "./components/JobsList.component"
import AddJob from "./components/AddJob.component"


function App() {
  return (
    <Router>
    <div className="container">
      <Navbar />
<br/>
<Route path="/" exact component={JobsList} />

<Route path="/add" component={AddJob} />
<Route path="/edit/:id" component={EditJob} />

    
    </div>
    </Router>
  );
}

export default App;
