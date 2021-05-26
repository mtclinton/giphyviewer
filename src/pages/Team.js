import React, {useEffect} from 'react';
import Nav from "../components/nav/Nav";
import myData from '../team.json';

import galleryStyle from "../css/gallery.css";
import {Masonry} from "masonic";
import SideBar from "../components/nav/SideBar";
import BodyNav from "../components/Body/BodyNav";
import Header from "../components/Body/Header";
import Subheader from "../components/Body/Subheader";

const FakeCard = ({ data}) => (
    <div className={galleryStyle.card}>

        <img className={galleryStyle.img} alt="kitty" src={data.image} />


    </div>
);


function App() {
    return (
        <div className="App">
            <Nav />
            <div className="container">
                <div className="columns">
                    <SideBar />

                    <div className="column is-9">
                        <BodyNav />
                        <Header />
                        <Subheader />

                        <div className="columns">
                            <main className={galleryStyle.container}>
                                <div className={galleryStyle.masonic}>
                                    <Masonry
                                        // Provides the data for our grid items
                                        items={myData.staff}
                                        // Adds 8px of space between the grid cells
                                        columnGutter={8}
                                        // Sets the minimum column width to 172px
                                        columnWidth={200}
                                        // Pre-renders 5 windows worth of content
                                        overscanBy={4}
                                        // This is the grid item component
                                        render={FakeCard}
                                    />
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
