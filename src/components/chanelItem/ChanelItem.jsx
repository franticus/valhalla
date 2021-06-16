import React from 'react';
import classes from './ChanelItem.module.css'

const ChanelItem = ({imgSrc, title, usersCount}) => {
    return (
            <div className={classes.ChanelItem}>
                <div className={classes.chanelAvatar}>
                    <img src={imgSrc} alt={title}/>
                </div>
                <div className={classes.chanelDescription}>
                    <span>{title}</span>
                    <span className={classes.usersCount}>{usersCount}</span>
                </div>
            </div>
    );
};

export default ChanelItem;
