import React from 'react';
import Elements from './Elements';
import styles from './Transaction.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = props => {
    return (
        <div>
            <table className={styles.transactionHistory}>
                <thead className={styles.thead}>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    {props.items.map(prop => {
                        return <Elements key={prop.id} items={prop} />;
                    })}
                </tbody>
            </table>
        </div>
    );
};
TransactionHistory.propTypes = {
    // здесь не получается сделать .isRequired!
    props: PropTypes.arrayOf(PropTypes.object),
};

export default TransactionHistory;