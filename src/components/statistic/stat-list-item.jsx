import React from 'react';
import styles from './statistics.module.css';

const StatListItem = ({ stats }) => {
    // const { item, label, percentage, statList } = styles;
    const elements = stats.map(({ id, label, percentage }) => {
        return (
            <li key={id} className={styles.item}>
                <span className={styles.label}>{label}</span>
                <span className={styles.percentage}>{percentage}%</span>
            </li>
        );
    });
    return <ul className={styles.statList}>{elements}</ul>;
};
export default StatListItem;
