import React from 'react';

function Header(props) {
    return (
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



    );
}

export default Header;
