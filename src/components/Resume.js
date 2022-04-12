import React from "react";

export default function Resume(){
    return (
        <section id="resume" className="grey-section">

            <div className="row section-intro">
                <div className="col-twelve">

                    <h5>Resume</h5>
                    <h1>More of my credentials.</h1>

                    <p className="lead">I have been working as a Software Engineer for a while now. Below are my work experiences in different professoinal software development companies.</p>

                </div>
            </div> 

            <div className="row resume-timeline">

                <div className="col-twelve resume-header">

                    <h2>Work Experience</h2>

                </div> 

                <div className="col-twelve">

                    <div className="timeline-wrap" id="work_experiences">
                        
                    </div> 

                </div> 

            </div> 

            <div className="row resume-timeline">

                <div className="col-twelve resume-header">

                    <h2>Education</h2>

                </div> 

                <div className="col-twelve">

                    <div className="timeline-wrap" id="educations">

                        
                    </div> 

                </div> 

            </div> 

        </section>
    );
}