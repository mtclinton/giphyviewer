import * as React from 'react';

function SideBar() {
    return (
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


    );
}

export default SideBar;
