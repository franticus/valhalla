import React from 'react';
import classes from './PreorderCards.module.css'
import wowCard from "../../assets/img/wowcard.png";

const PreorderCards = ({title, imgSrc, curPrice, discount}) => {
    return (
        <div className={classes.preorderCards}>
            <div className={classes.cardItem}>
                <img src={imgSrc} alt={title}/>
                <p className={classes.title}>{title}</p>
                <p className={classes.curPrice}>{curPrice}</p>
                <span className={classes.curPriceCross}>{curPrice}</span>
                <span className={classes.discount}>{discount}</span>
                <button className={classes.preOrderBtn}>Pre Order</button>
            </div>
        </div>
    );
};

export default PreorderCards;
