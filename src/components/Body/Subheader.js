import React from 'react';

function Subheader(props) {
    return (
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



    );
}

export default Subheader;
