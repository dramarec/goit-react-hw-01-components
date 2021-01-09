import React from 'react';
import PropTypes from 'prop-types';

const Type = ({ type }) => {
    const types = type.charAt(0).toUpperCase() + type.substr(1).toLowerCase();
    return <td>{types}</td>;
};
Type.propTypes = {
    type: PropTypes.node.isRequired,
};
export default Type;
