import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const StatListItem = ({ props }) => {
    return (
        <li className={styles.item}>
            <span className={styles.label}>{props.label}</span>
            <span className={styles.percentage}>{props.percentage}%</span>
        </li>
    );
};
StatListItem.propTypes = {
    props: PropTypes.object.isRequired,
};
export default StatListItem;
