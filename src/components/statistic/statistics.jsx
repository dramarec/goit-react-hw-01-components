import React from 'react';
import styles from './Statistics.module.css';
import StatListItem from './StatListItem';
import PropTypes from 'prop-types';

const Statistics = ({ stats, title }) => {
    return (
        <div className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}

            <ul className={styles.statList}>
                {stats.map(stat => (
                    <StatListItem key={stat.id} props={stat} />
                ))}
            </ul>
        </div>
    );
};
Statistics.propTypes = {
    stats: PropTypes.array.isRequired,
    title: PropTypes.string,
};
export default Statistics;
