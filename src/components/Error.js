import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1> this page is getting error </h1>
            <h3>Errros is : {err.status} and {err.statusText}</h3>
        </div>
    );
}

export default Error