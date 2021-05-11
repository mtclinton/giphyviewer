import React, {useEffect} from 'react';
import Nav from "./Nav";
import myData from './team.json';

import galleryStyle from "./css/gallery.css";
import {Masonry} from "masonic";

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
                    <div className="column is-3 ">
                        <aside className="menu is-hidden-mobile">
                            <p className="menu-label">
                                General
                            </p>
                            <ul className="menu-list">
                                <li><a className="is-active">Gifs</a></li>
                                <li><a>Artists</a></li>
                                <li><a>Videos</a></li>
                            </ul>
                            <p className="menu-label">
                                Categories
                            </p>
                            <ul className="menu-list">
                                <li><a>Animals</a></li>
                                <li>
                                    <a>Stickers</a>
                                    <ul>
                                        <li><a>Originals</a></li>
                                        <li><a>Trending</a></li>
                                        <li><a>Reactions</a></li>
                                        <li><a>Packs</a></li>
                                    </ul>
                                </li>
                                <li><a>Cartoons</a></li>
                                <li><a>Emotions</a></li>
                                <li><a>Gaming</a></li>
                                <li><a>Memes</a></li>
                            </ul>
                            <p className="menu-label">
                                About
                            </p>
                            <ul className="menu-list">
                                <li><a>Team</a></li>
                                <li><a>Studios</a></li>
                                <li><a>Developers</a></li>
                                <li><a>Labs</a></li>
                            </ul>
                        </aside>
                    </div>
                    <div className="column is-9">
                        <nav className="breadcrumb" aria-label="breadcrumbs">
                            <ul>
                                <li><a href="../">Reactions</a></li>
                                <li><a href="../">Entertainment</a></li>
                                <li><a href="../">Sports</a></li>
                                <li className="is-active"><a href="#" aria-current="page">Fun</a></li>
                            </ul>
                        </nav>
                        <section className="hero is-info welcome is-small">
                            <div className="hero-body">
                                <div className="container">
                                    <h1 className="title">
                                        Hello guest,
                                    </h1>
                                    <h2 className="subtitle">
                                        log in or create an account to save fun gifs!
                                    </h2>
                                </div>
                            </div>
                        </section>
                        <section className="info-tiles">
                            <div className="tile is-ancestor has-text-centered">
                                <div className="tile is-parent">
                                    <article className="tile is-child box">
                                        <p className="title">439k</p>
                                        <p className="subtitle">Users</p>
                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child box">
                                        <p className="title">59k</p>
                                        <p className="subtitle">Gifs</p>
                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child box">
                                        <p className="title">3.4k</p>
                                        <p className="subtitle">Reactions</p>
                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child box">
                                        <p className="title">19</p>
                                        <p className="subtitle">Likes</p>
                                    </article>
                                </div>
                            </div>
                        </section>
                        <div className="columns">
                            <main className={galleryStyle.container}>
                                <div className={galleryStyle.masonic}>
                                    <Masonry
                                        // Provides the data for our grid items
                                        items={myData.staff}
                                        // Adds 8px of space between the grid cells
                                        columnGutter={8}
                                        // Sets the minimum column width to 172px
                                        columnWidth={172}
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
