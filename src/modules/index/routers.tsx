import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import loadable from "@loadable/component";
import App from "./app";
// import App from "~/modules/index/app";
// import HookTest from "./hookTest";
// import Test from "./test";

// const App = loadable(() => import('@/modules/index/app'));

const HookTest = loadable(async () => import("./hookTest"));

const Test = loadable(async () => import("./test"));

const RouterPage = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Test} />
                <Route exact path="/app" component={App} />
                <Route exact path="/hookTest" component={HookTest} />
            </Switch>
        </div>
    </Router>
);

export default RouterPage;
