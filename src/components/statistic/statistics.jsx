import React from 'react';
import styles from './statistics.module.css';
import StatListItem from './StatListItem';
import PropTypes from 'prop-types';

const Statistics = props => {
    const { statistics, title, statList } = styles;
    return (
        <div className={statistics}>
            <h2 className={title}>Upload stats</h2>{' '}
            <ul className={statList}>
                {props.stats.map(prop => {
                    return <StatListItem key={prop.id} stats={prop} />;
                })}
            </ul>
        </div>
    );
};
Statistics.propTypes = {
    props: PropTypes.array,
};
export default Statistics;
