import React from "react";

export default function Footer(){
    return (
        <footer>
            <div className="row">

                <div className="col-six tab-full pull-right social">

                    <ul className="footer-social">
                        <li><a href="https://github.com/alvi2496"><i className="fa fa-github"></i></a></li>
                        <li><a href="https://bitbucket.org/alvi2496"><i className="fa fa-bitbucket"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/alvi-mahadi/"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="https://join.skype.com/invite/HX7cYePBMNZb"><i className="fa fa-skype"></i></a></li>
                        <li><a href="https://plus.google.com/u/2/112906175555320265390"><i className="fa fa-google-plus"></i></a></li>
                    </ul>

                </div>

                <div className="col-six tab-full">
                    <div className="copyright">
                        <span>� Copyright Alvi 2018.</span>
                        <span>Design by <a href="https://alvi2496.bitbucket.io">Alvi Mahadi</a></span>
                    </div>
                </div>

                <div id="go-top">
                    <a className="smoothscroll" title="Back to Top" href="#top"><i className="fa fa-long-arrow-up"></i></a>
                </div>

            </div> 
        </footer> 
    );
}