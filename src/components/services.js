import React, { Component } from "react";
import Fade from 'react-reveal/Fade';
import "../styles/services.scss";
import TextLoop from "react-text-loop";

const randomNumber = () => Math.floor(Math.random() * 9999999999 + 10000000000);

const texts = ["Websites", "Apps", "Landing pages", "SEO", "Marketing", "APIs", "Authentication", "Web annimations", "Forms", "Design", "Logos"];

class Services extends Component {
    state = {
        number: randomNumber(),
        textIndex: 0,
        textFastIndex: 0,
        paragraphIndex: 0,
        renderMsg: false,
    };

    onHeaderTyped = () => {
        this.setState({ renderMsg: true });
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                number: randomNumber(),
                textIndex: this.state.textIndex + 1,
                paragraphIndex: this.state.paragraphIndex + 1,
            });
        }, 4000);
        setInterval(() => {
            this.setState({
                textFastIndex: this.state.textFastIndex + 1
            });
        }, 400);
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
                                        <TextLoop mask={true} fade={false} >
                                            <span className="productText"> {texts[0]}</span>
                                            <span className="productText"> {texts[1]}</span>
                                            <span className="productText"> {texts[2]}</span>
                                        </TextLoop>
                                    </div>
                                    <div>
                                        <TextLoop delay={500} mask={true} fade={false} >
                                            <span className="productText"> {texts[3]}</span>
                                            <span className="productText"> {texts[4]}</span>
                                            <span className="productText"> {texts[5]}</span>
                                        </TextLoop>
                                    </div>
                                    <div>
                                        <TextLoop delay={1000} mask={true} fade={false} >
                                            <span className="productText"> {texts[6]}</span>
                                            <span className="productText"> {texts[7]}</span>
                                            <span className="productText"> {texts[8]}</span>
                                        </TextLoop>
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