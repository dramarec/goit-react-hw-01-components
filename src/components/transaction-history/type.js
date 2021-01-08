import React from 'react';

const Type = ({ type }) => {
    const types = type.charAt(0).toUpperCase() + type.substr(1).toLowerCase();
    return <td>{types}</td>;
};
export default Type;
