import React from 'react';
import styles from './statistics.module.css';

const StatListItem = ({ stats }) => {
    const elements = stats.map(item => {
        return (
            <li key={item.id} className={styles.item}>
                <span className={styles.label}>{item.label}</span>
                <span className={styles.percentage}>{item.percentage}%</span>
            </li>
        );
    });
    return <ul className={styles.statList}>{elements}</ul>;
};
export default StatListItem;
