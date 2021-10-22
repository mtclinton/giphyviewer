import * as React from 'react';
import SideBar from "./nav/SideBar";
import Body from "./Body/Body";

function Container() {
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
