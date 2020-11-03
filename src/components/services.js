import React, { Component } from "react";
import Fade from 'react-reveal/Fade';
import "../styles/services.scss";

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = "";
    }
    componentDidMount() {
        let product = [
            "Websites",
            "Apps",
            "Landing pages",
            "SEO", "Marketing",
            "APIs", "Authentication",
            "Web annimations",
            "Forms",
            "Design",
            "Logos"],
            intervalDurationMs = 300,
            currentIndex = 0,
            maxNumTimes = -1,
            numTimesRan = 0;

        let interval = setInterval(function () {
            if (maxNumTimes !== 0) {
                this.setState({
                    productText: product[currentIndex]
                });
                currentIndex++;
                if (currentIndex > product.length - 1) {
                    if (maxNumTimes === -1) {
                        currentIndex = 0;
                    } else {
                        numTimesRan++;
                        if (numTimesRan === maxNumTimes) {
                            clearInterval(interval);
                        } else {
                            currentIndex = 0;
                        }
                    }
                }
            } else {
                clearInterval(interval);
            }
        }.bind(this), intervalDurationMs);
    }

    render() {
        return (
            <React.Fragment>
                <div id='serviceContent'>
                    <section className="services" role='main'>
                        <Fade left>
                            <article className="serviceHelp">
                                <div className="card container" role='main'>
                                    <Fade left> <p> Do you need help building a new website </p> </Fade>
                                    <Fade left>
                                        <p> Or help refreshing one that is getting older? </p>
                                    </Fade>
                                    <Fade left>
                                        <p> Want to add a cool new feature to your site </p>
                                    </Fade>
                                    <Fade left>
                                        <p> or help with a new app idea? </p>
                                    </Fade>
                                </div>
                            </article>
                        </Fade>
                    </section>
                    <div id="divider"></div>
                    <section className="products" role='main'>
                        <Fade right>
                            <article className="productsHelp">
                                <div className="card container" role='main'>
                                    <p> Whatever the case, Nitch can help with: </p>
                                    <div>
                                        <span className="productText">{this.state.productText}</span>
                                    </div>
                                </div>
                            </article>

                        </Fade>
                    </section>
                </div>
            </React.Fragment >
        );
    }
}

export default Services;