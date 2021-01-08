import React from 'react';
import StatListItem from './stat-list-item';
import statisicalData from './statistical-data.json';
import styles from './statistics.module.css';

const Statistics = () => {
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>Upload stats</h2>
            <StatListItem stats={statisicalData} />
        </section>
    );
};

export default Statistics;
