'use client'

import { useState } from "react";

import Map from "../_components/map";

const Home: React.FC = () => {

    const [toggle, setToggle] = useState(true);

    return (
        <>
            <Map />
        </>
    )
}

export default Home