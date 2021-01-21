import PropTypes from 'prop-types';
import React from 'react';

const Section = ({ title, children }) => {
    return (
        <section>
            <div className="container">
                <p>{title}</p>
                {children}
            </div>
        </section>
    );
};
export default Section;
Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
};
