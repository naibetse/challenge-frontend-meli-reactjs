import React from "react";
import {
    Router,
    Switch,
    Route,
} from "react-router-dom";

import history from "../helpers/history";
import Navbar from "../components/ui/navbar/Navbar";
import {ItemsList} from '../components/items/ItemsList';
import ItemDetails from '../components/item/ItemDetails'

export const AppRouter = () => {
    return (
        <Router history={ history }>
            <header className="container-fluid nav-header">
                <Navbar />
            </header>
            
            <Switch>
                <Route exact path="/items" component={ ItemsList } />
                <Route exact path="/items/:id" component={ ItemDetails } />
                {/* <Redirect to="/" /> */}
            </Switch>
        </Router>        

    )
}
