import React, { Component } from "react";
import ReactTextTransition, { presets } from "react-text-transition";
import Typist from 'react-typist';
import Fade from 'react-reveal/Fade';
import "../styles/services.scss";

const randomNumber = () => Math.floor(Math.random() * 9999999999 + 10000000000);

const texts = ["websites", "apps", "landing pages", "SEO", "marketing", "APIs", "authentication", "annimations", "forms"];

const paragraphs = [
    "Do you need help building a new website...",
    "Or help refreshing one that is getting older?",
    "to add a cool new feature to your site",
    "help with a new app idea?"
];

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
                <section className="services">
                    <Fade left>
                        <article className="serviceHelp">
                        <div className="card container">
                            <Typist
                                cursor={{ hideWhenDone: true }}
                                onTypingDone={this.onHeaderTyped}
                            >
                                
                                    <span> {paragraphs[0]}</span>
                                    <br /> <br />
                                    <Typist.Delay ms={500} />
                                    <span>{paragraphs[1]}</span>
                            
                            </Typist>
                        </div>
                        </article>
                    </Fade>
                </section>
                <section className="products">
                    <Fade right>
                        <article className="inline">
                            <div className="card container">
                            <p> Whatever the case, Nitch can help w/:<strong> <br /> <br /> <ReactTextTransition className="productText"
                                text={texts[this.state.textFastIndex % texts.length]}
                                spring={presets.genlte}
                                direction={"down"}
                                overflow
                            />
                            </strong>
                            </p>
                            </div>
                        </article>
                    </Fade>
                </section>
            </React.Fragment>
        );
    }
}

export default Services;