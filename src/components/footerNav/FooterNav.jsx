import React from 'react';
import classes from './FooterNav.module.css'

const FooterNav = () => {
    return (
        <section className={classes.footerNavWrapper}>
            <div className={classes.footerBlock}>
                <ul>
                    <li className={classes.footerItemTitle}>LA3EB</li>
                    <li>About us</li>
                    <li>Careers</li>
                    <li>Newsroom</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className={classes.footerBlock}>
                <ul>
                    <li className={classes.footerItemTitle}>HELP</li>
                    <li>Support Hub</li>
                    <li>How to activate Games</li>
                    <li>Terms & Condictions</li>
                    <li>Privacy & Cookies</li>
                    <li>Returns & Refunds</li>
                </ul>
            </div>
            <div className={classes.footerBlock}>
                <ul>
                    <li className={classes.footerItemTitle}>BUSINESS</li>
                    <li>Business Center</li>
                    <li>Careers</li>
                    <li>Newsroom</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className={classes.footerBlock}>
                <ul>
                    <li className={classes.footerItemTitle}>Install the app</li>
                    <li>Business Center</li>
                    <li>Selling on La3eb</li>
                    <li>Developer & Publisher</li>
                    <li>Marketing Partnership</li>
                </ul>
            </div>
        </section>
    );
};

export default FooterNav;
