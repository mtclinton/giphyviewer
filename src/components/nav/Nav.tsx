import * as React from 'react';


function Nav() {
    return (

        <nav className="navbar is-white">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item brand-text" href="../index.html">
                        GifhyViewer
                    </a>
                    <div className="navbar-burger burger" data-target="navMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div id="navMenu" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="admin.html">
                            Home
                        </a>
                        <a className="navbar-item" href="admin.html">
                            Trending
                        </a>
                        <a className="navbar-item" href="admin.html">
                            New
                        </a>
                        <a className="navbar-item" href="admin.html">
                            Favorites
                        </a>
                        <a className="navbar-item" href="admin.html">
                            Classics
                        </a>
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Nav;
