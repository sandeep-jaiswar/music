import React, { Suspense } from "react";
import { routeArr } from "./config";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import Loader from "../components/Loader";

export default function RootRouter() {
    const getRoutePage = () => {
        return <BrowserRouter>
            <Switch>
                {routeArr.map((ele) => (
                    <Route key={ele.path} {...ele} />
                ))}
            </Switch>
        </BrowserRouter>
    }
    return (
        <Suspense fallback={<Loader />}>
            {getRoutePage()}
        </Suspense>
    )
}