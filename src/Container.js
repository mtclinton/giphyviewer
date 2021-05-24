import React from 'react';
import SideBar from "./SideBar";
import Body from "./components/Body/Body";

function Container(props) {
    return (
        <div className="container">
            <div className="columns">
                <SideBar />
                <Body />
            </div>
        </div>


    );
}

export default Container;
