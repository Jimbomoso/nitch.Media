import React from "react"
import Layout from "../components/layout"
import "../styles/about.scss"
import { Link } from "gatsby"
import Zoom from 'react-reveal/Zoom';
import Metadata from "../components/metadata"

const About = () => {
    return (
        <Layout>
            <Metadata title="About" description="About Nitch Media" />
            <Zoom bottom>
                <div className="about-main-section">
                    <h1 className="title">What's our Nitch?</h1>
                    <span className="subtitle">Simple: </span>
                    <ol>
                        <li>Providing the best customer service</li>
                        <li>Providing the best web development</li>
                    </ol>
                    <p>What's your Nitch?  </p>
                    <Link to={"/contact"}> <button> Contact </button> </Link>
                </div>
            </Zoom>
        </Layout>

    )
}

export default About