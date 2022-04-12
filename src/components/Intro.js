import React from "react";

export default function Intro(){
    return (
        <section id="intro">

            <div className="intro-overlay"></div>

            <div className="intro-content">
                <div className="row">

                    <div className="col-twelve">

                        <h5>Hello, World.</h5>
                        <h1 id="introUserName">Loading..</h1>
                        {
                            // <p className="intro-position">
                            //     <span>Front-end Developer</span>
                            //     <span>UI/UX Designer</span> 
                            // </p>
                        }
                        <a className="button stroke smoothscroll" href="#about" title="">More About Me</a>
                    </div>
                </div>
            </div>

            <ul className="intro-social">
                <li><a href="https://github.com/alvi2496"><i className="fa fa-github"></i></a></li>
                <li><a href="https://bitbucket.org/alvi2496"><i className="fa fa-bitbucket"></i></a></li>
                <li><a href="https://www.linkedin.com/in/alvi-mahadi/"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="https://join.skype.com/invite/HX7cYePBMNZb"><i className="fa fa-skype"></i></a></li>
                <li><a href="https://plus.google.com/u/2/112906175555320265390"><i className="fa fa-google-plus"></i></a></li>
            </ul>

        </section> 
    );
}