import React from "react";

export default function Contact(){
    return (
        <section id="contact">

            <div className="row section-intro">
                <div className="col-twelve">

                    <h5>Contact</h5>
                    <h1>I'd Love To Hear From You.</h1>

                    <p className="lead">You can contact me by email, skype or please fill the following form to leave me a message. I will get back to you as soon as possible.</p><p>Thank you.</p>

                </div>
            </div> 

            <div className="row contact-form">

                <div className="col-twelve">

                    
                    <form id="contactForm" method="post" action="">
                        <fieldset>

                            <div className="form-field">
                                <input name="name" type="text" id="contactName" placeholder="Name" value="" minLength="2" required="" />
                            </div>
                            <div className="form-field">
                                <input name="email" type="email" id="contactEmail" placeholder="Email" value="" required="" />
                            </div>
                            <div className="form-field">
                                <input name="subject" type="text" id="contactSubject" placeholder="Subject" value="" />
                            </div>
                            <div className="form-field">
                                <textarea name="message" id="contactMessage" placeholder="message" rows="10" cols="50" required=""></textarea>
                            </div>
                            <div className="form-field">
                                <button className="submitform">Submit</button>
                                <div id="submit-loader">
                                    <div className="text-loader">Sending...</div>
                                    <div className="s-loader">
                                        <div className="bounce1"></div>
                                        <div className="bounce2"></div>
                                        <div className="bounce3"></div>
                                    </div>
                                </div>
                            </div>

                        </fieldset>
                    </form> 
                    <div id="feedbackMessage">

                    </div>

                </div> 

            </div>

            <div className="row contact-info">

                <div className="col-four tab-full">

                    <div className="icon">
                        <i className="icon-pin"></i>
                    </div>

                    <h5>Where to find me</h5>

                    <p>
                        Street# 05, House# 05
                            Dhaka, Bangladesh
                    </p>

                </div>

                <div className="col-four tab-full collapse">

                    <div className="icon">
                        <i className="icon-mail"></i>
                    </div>

                    <h5>Email Me At</h5>

                    <p>alvi.mahadi2496@gmail.com
                    </p>

                </div>

                <div className="col-four tab-full">

                    <div className="icon">
                        <i className="icon-phone"></i>
                    </div>

                    <h5>Call Me At</h5>

                    <p>Phone: (+88) 01712-938287
                    </p>

                </div>

            </div>

        </section>
    )
}