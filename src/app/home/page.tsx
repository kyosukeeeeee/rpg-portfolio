'use client'

import Header from "../_components/Header";
import Map from "../_components/Map";
import Instructions from "../_components/Instructions"

const Home: React.FC = () => {

    return (
        <>
            <Header />
            <Map />
            <Instructions />
        </>
    )
}

export default Home