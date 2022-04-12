import React from "react";

export default function Portfolio(){
    return (
        <section id="portfolio">

            <div className="row section-intro">
                <div className="col-twelve">

                    <h5>Portfolio</h5>
                    <h1>Check Out Some of My Works.</h1>

                    <p className="lead">Here are some screenshot of my previous works. I was heavily involved in these projects.</p>

                </div>
            </div> 

            <div className="row portfolio-content">

                <div className="col-twelve">

                    
                    <div id="folio-wrapper" className="block-1-2 block-mob-full stack">
                        <div className="bgrid folio-item">
                            <div className="item-wrap">
                                <img src="images/portfolio/LeaveTracker.png" alt="LeaveTracker" />
                                    <a href="#modal-01" className="overlay">
                                        <div className="folio-item-table">
                                            <div className="folio-item-cell">
                                                <h3 className="folio-title">LeaveTracker</h3>
                                                <span className="folio-types">
                                                    Web Development
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                            </div>
                        </div>

                        <div className="bgrid folio-item">
                            <div className="item-wrap">
                                <img src="images/portfolio/Root2Reapp.png" alt="Root2Reapp" />
                                    <a href="#modal-02" className="overlay">
                                        <div className="folio-item-table">
                                            <div className="folio-item-cell">
                                                <h3 className="folio-title">Root2Reapp</h3>
                                                <span className="folio-types">
                                                    Web/API Development
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                            </div>
                        </div>

                        <div id="modal-01" className="popup-modal slider mfp-hide">
                            <div className="media">
                                <img src="images/portfolio/modals/m-LeaveTracker.png" alt="" />
                            </div>
                            <div className="description-box">
                                <h4>LeaveTracker</h4>
                                <p>LeaveTracker is a leave management and tracking tool for the employees of an organization. Easily track and manage the leave of an organization with LeaveTracker.</p>
                                <div className="categories">Web Development</div>
                            </div>
                            <div className="link-box">
                                <a href="https://timetracker.nascenia.com">Details</a>
                                <a href="#" className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>

                        <div id="modal-02" className="popup-modal slider mfp-hide">
                            <div className="media">
                                <img src="images/portfolio/modals/m-Root2Reapp.png" alt="" />
                            </div>
                            <div className="description-box">
                                <h4>Root2Reapp</h4>
                                <p>root2reapp is an adaptable, easily operated app which informs you of special offers, allows you to benefit from them and keeps you updated of any news on the local market. Tell it where you are and it will point you to the best deals in that area! Let businesses know if you were satisfied and how they can offer a better service.</p>
                                <div className="categories">Web/API Development</div>
                            </div>
                            <div className="link-box">
                                <a href="https://root2reapp.com">Details</a>
                                <a href="#" className="popup-modal-dismiss">Close</a>
                            </div>
                        </div>

                    </div> 

                </div>  

            </div> 

        </section>
    );
}