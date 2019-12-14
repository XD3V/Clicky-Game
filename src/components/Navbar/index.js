import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <div>

            <nav className="navBar" >

                <a href="#!" className=" navBarText">Oceanic Clicks</a>

                <span className=" navBarText ">{props.message}</span>

                <span className=" navBarText ">Score:{props.curScore} </span>

                <span className=" navBarText ">Top Score:{props.topScore} </span>

            </nav>

        </div>



    )

}

export default Navbar;