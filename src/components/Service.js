import React from "react";

export default function Service(){
    return (
        <section id="services">
            <div className="overlay"></div>
            <div className="row section-intro">
                <div className="col-twelve">
                    <h5>Services</h5>
                    <h1>What Can I Do For You?</h1>
                    <p className="lead">I offer a wide variety of web solutions. Below are some of my services that I provide.</p>
                </div>
            </div>
            <div className="row services-content">
                <div id="owl-slider" className="owl-carousel services-list">
                    <div className="service">
                        <span className="icon"><i className="icon-earth"></i></span>
                        <div className="service-content">
                            <h3>Web/API Development</h3>
                            <p className="desc">
                                I have vast experience in Web application and API development. I can develop and maintain any kinds of web application in Ruby on Rails.
                            </p>
                        </div>
                    </div>
                    <div className="service">
                        <span className="icon"><i className="icon-terminal"></i></span>
                        <div className="service-content">
                            <h3>JavaScript Development</h3>
                            <p className="desc">
                                JavaScript is a proficient client side scripting language and I am very proficient in developing applications in JavaScript. Very proficient in using various JavaScript libraries like JQuery and very good in using vanilla JavaScript.
                            </p>
                        </div>
                    </div>
                    <div className="service">
                        <span className="icon"><i className="icon-window"></i></span>
                        <div className="service-content">
                            <h3>Debugging</h3>
                            <p className="desc">
                                Very good at understanding existing code base and can provide debugging for your application and can implement new features for your application.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    );
}