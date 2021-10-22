import * as React from 'react';

function BodyNav() {
    return (
        <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li><a href="../..">Reactions</a></li>
                <li><a href="../..">Entertainment</a></li>
                <li><a href="../..">Sports</a></li>
                <li className="is-active"><a href="#" aria-current="page">Fun</a></li>
            </ul>
        </nav>



    );
}

export default BodyNav;
