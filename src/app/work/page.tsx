'use client'

import Product from "../_components/Product";
import Header from "../_components/Header";

import "../_components/style/work.scss"

const Work: React.FC = () => {
    return (
        <>
            <Header />
            <div className="work-wrapper">
                <Product />
                <Product />
                <Product />
            </div>
        </>
    )
}

export default Work;