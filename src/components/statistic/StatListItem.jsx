import React from 'react';
import styles from './statistics.module.css';
import PropTypes from 'prop-types';

const StatListItem = ({ stats }) => {
    const { id, label, percentage } = stats;
    return (
        <li className={styles.item} key={id}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
        </li>
    );
};
StatListItem.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
};
export default StatListItem;
