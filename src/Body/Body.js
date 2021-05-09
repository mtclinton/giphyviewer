import React from 'react';
import BodyNav from "./BodyNav";
import Header from "./Header";
import Subheader from "./Subheader";
import Content from "./Content";

function Body(props) {
    return (
        <div className="column is-9">
            <BodyNav />
            <Header />
            <Subheader />
            <div className="columns">
                <Content />
            </div>
        </div>



    );
}

export default Body;
