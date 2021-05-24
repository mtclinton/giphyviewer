import React, {useState, useEffect} from 'react';

import {Masonry} from 'masonic'

import galleryStyle from "../../css/gallery.css"

function Content(props) {

    const [imageData, setImageData] = useState([])

    const FakeCard = ({ data}) => (
        <div className={galleryStyle.card}>
            <img className={galleryStyle.img} alt="kitty" src={data.images.original.url} />

        </div>
    );


    // ***** fetch data *****
    const fetchData = async url => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setImageData(imageData => [...imageData, ...data["data"]])
            // setLoadCount(loadCount => loadCount + 1)
        } catch (err) {
            console.log("Error:", err)
        }
    }

    useEffect(() => {
        fetchData(  `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}`)
    }, [])


    return (
        <main className={galleryStyle.container}>
            <div className={galleryStyle.masonic}>
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
            </div>
        </main>

    )
}

export default Content;
