import React from "react";
import Navbar from "./Router/Navbar";
import Home from "./Router/Home";
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import About from "./Router/About";

function App()
{
    return <div>
        <Router>
        <Navbar/>
        <Switch>
            <Route path={"/Home"} component={Home}/>
            <Route path={"/About"} component={About}/>
        </Switch>
        </Router>
    </div>
}
export default App