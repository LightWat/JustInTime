import React from "react";
import { Link } from "react-router-dom";

export default function Menu(){
    return (
        <div style={{backgroundColor: "b1dae7"}}>
            <Link style={{margin: 5}} to="/LoginPage">LoginPage</Link>
        </div>
    )
}