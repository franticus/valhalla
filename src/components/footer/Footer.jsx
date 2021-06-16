import React from 'react';
import classes from './Footer.module.css'
import icnVisa from "../../assets/img/visa.png";
import icnMastercard from "../../assets/img/mastercard.png";
import icnPaypal from "../../assets/img/paypal.png";

const Footer = () => {
    return (
        <footer className={classes.footerWrapper}>
            <div className={classes.copyright}>
                Copyright © 2020. All Rights Reserved. <br/>
                Use of this Web site constitutes acceptance of the Terms and Conditions and Privacy policy. All
                copyrights, trade marks, service marks belong to the corresponding owners.
            </div>
            <div className={classes.payCards}>
                <img src={icnVisa} alt="visa"/>
                <img src={icnMastercard} alt="mastercard"/>
                <img src={icnPaypal} alt="paypal"/>
            </div>
        </footer>
    );
};

export default Footer;
