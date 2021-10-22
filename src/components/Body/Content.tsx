import React, {useState, useEffect} from 'react';
import axios, {AxiosResponse} from 'axios';

import {Masonry} from 'masonic'
import {IGif} from "../../types";


function Content() {

    const [imageData, setImageData] = useState<IGif []| null>(null)

    const FakeCard = ({  data}: {data: any}) => (
        <div className={"card"}>
            <img className={"img"} alt="kitty" src={data.images.original.url} />

        </div>
    );

    useEffect(() => {
        axios.get<AxiosResponse<any>>(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => {

                setImageData(res.data.data);

            }).catch((e) => {
            console.error(e);
        });
    }, );


    return (
        <main className={"container"}>
            <div className={"masonic"}>
                {
                    imageData &&
                    <Masonry
                        // Provides the data for our grid items
                        items={imageData}
                        // Adds 8px of space between the grid cells
                        columnGutter={8}
                        // Sets the minimum column width to 172px
                        columnWidth={172}
                        // Pre-renders 5 windows worth of content
                        overscanBy={5}
                        // This is the grid item component
                        render={FakeCard}
                    />
                }
            </div>
        </main>

    )
}

export default Content;
