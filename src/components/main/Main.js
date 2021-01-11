import React from 'react';
// import PropTypes from 'prop-types';

const Main = ({ children }) => {
    // console.log('children :', children);
    return <main>{children}</main>;
};
export default Main;

// здесь вообще не получается сделать propTypes!

// Main.propTypes = {
//     children: PropTypes.arrayOf(PropTypes.shape{

//     }).isRequired,
// };
