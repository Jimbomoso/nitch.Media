import React from 'react';
import Services from "../components/services"
import "../styles/styles.scss"
import Zoom from 'react-reveal/Zoom'
import Metadata from "../components/metadata"

const Home = () => {

    return (
        <div>
            <Metadata title="Home" description="Nitch Media is a web development agency who builds modern, high-performance, high-quality websites and apps." />
            <Zoom>
                <section className="hero" role='banner'>
                    <div className="heroText" role='main'>
                        <h1>We made web development our <strong> <em> Nitch </em> </strong> </h1>
                        <h2> so you can focus on yours.</h2>
                    </div>
                </section>
            </Zoom>
            <Services />
        </div>

    )
}

export default Home;