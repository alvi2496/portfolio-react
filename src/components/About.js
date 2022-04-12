import React from "react";

export default function About(){
    return (
        <section id="about">

            <div className="row section-intro">
                <div className="col-twelve">

                    <h5>About</h5>
                    <h1>Let me introduce myself.</h1>

                    <div className="intro-info">

                        <img src="images/profile-pic.jpg" alt="Profile Picture" />

                        <p id="userIntroduction" className="lead">Loading..</p>
                    </div>

                </div>
            </div>

            <div className="row about-content">

                <div className="col-six tab-full">

                    <h3>Profile</h3>
                    <p id="userProfile">Loading..</p>

                    <ul className="info-list">
                        <li>
                            <strong>Fullname:</strong>
                            <span id="userFullName">Loading..</span>
                        </li>
                        <li>
                            <strong>Birth Date:</strong>
                            <span id="userDateOfBirth">Loading..</span>
                        </li>
                        <li>
                            <strong>Job:</strong>
                            <span id="userJob">Loading..</span>
                        </li>
                        <li>
                            <strong>Website:</strong>
                            <span id="userWebsite">Loading..</span>
                        </li>
                        <li>
                            <strong>Email:</strong>
                            <span id="userEmail">Loading..</span>
                        </li>

                    </ul>

                </div>

                <div className="col-six tab-full">

                    <h3>Skills</h3>
                    <p id="userSkills">Loading...</p>

                    <ul className="skill-bars">
                        <li>
                            <div className="progress percent90"><span>90%</span></div>
                            <strong>HTML5</strong>
                        </li>
                        <li>
                            <div className="progress percent85"><span>85%</span></div>
                            <strong>CSS3</strong>
                        </li>
                        <li>
                            <div className="progress percent70"><span>70%</span></div>
                            <strong>JQuery</strong>
                        </li>
                        <li>
                            <div className="progress percent95"><span>95%</span></div>
                            <strong>PHP</strong>
                        </li>
                        <li>
                            <div className="progress percent75"><span>75%</span></div>
                            <strong>Wordpress</strong>
                        </li> 
                    </ul> 

                </div>

            </div>

            <div className="row button-section">
                <div className="col-twelve">
                    <a href="https://www.upwork.com/freelancers/~01a0e6f2c8265b7cb1" title="Hire Me" className="button stroke" target="_blank">Hire Me</a>
                    <a href="https://drive.google.com/open?id=1USPAjEWccjbvfV8PcEnbbusDpSJbuoyo" title="Download CV" className="button button-primary">Download CV</a>
                </div>
            </div>

        </section>  
    );
}