import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Developer from "./pages/Developer";
import DeveloperList from "./pages/DeveloperList";

function Routes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route path="/" component={DeveloperList} exact></Route>
                <Route path="/developer" component={Developer} exact></Route>
                <Route path="/developer/:id" component={Developer}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;