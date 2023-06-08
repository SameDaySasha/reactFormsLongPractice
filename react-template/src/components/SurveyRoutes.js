import React from "react";
import { BrowserRouter} from "react-router-dom";
import Home from "../components/Home";
import Inventory from "../components/Inventory";
import SampleSurvey from "../components/SampleSurvey";
import InventoryReport from "../components/InventoryReport";
import { NavLink, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";


const SurveyRoutes = () => {
    return (

        <BrowserRouter>
            <div>
                <NavLink to="/">Home</NavLink>
                {' '}|{' '}
                <NavLink to="/sample">Sample</NavLink>
                {' '}|{' '}
                <NavLink to="/inventory">Inventory</NavLink>
                {' '}|{' '}
                <NavLink to="/report">Report</NavLink>
            </div>
            <Switch>
                <Route path="/sample">
                    <SampleSurvey />
                </Route>
                <Route path="/inventory">
                    <Inventory />
                </Route>
                <Route path="/report">
                    <InventoryReport />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>

    )
};

export default SurveyRoutes;
