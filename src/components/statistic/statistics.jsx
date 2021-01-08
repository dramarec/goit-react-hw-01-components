import React from 'react';
import styles from './statistics.module.css';

import StatListItem from './stat-list-item';
import statisicalData from './statistical-data.json';

const Statistics = () => {
    return (
        <div className={styles.statistics}>
            <h2 className={styles.title}>Upload stats</h2>
            <StatListItem stats={statisicalData} />
        </div>
    );
};

export default Statistics;
