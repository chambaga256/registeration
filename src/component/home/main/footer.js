import React from 'react';
import './footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__details">
                <div className="footer__left">
                    <img alt="" src="/images/logo.jpeg"

                        className="footer__logo"
                    />
                    <div className="footer__leftContent">
                        <h4>Stratcom-Ug</h4>
                    </div>
                </div>
                <div className="footer__middle">
                    <p>@2021 Stratcom-Ug All rights reserved</p>
                </div>
                <div className="footer__right">
                    <div className="footer__rightIconFacebook">
                        <FacebookIcon


                                className="facebook" />
                    </div>

                    <div className="footer__rightIconTwitter">
                        <TwitterIcon

                            className="twitter" />
                    </div>
                    <div className="footer__rightIconYouTube">
                        <YouTubeIcon


                            className="youtube" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer;