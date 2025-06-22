import React from 'react';
import { Link } from 'react-router-dom';

const ExtendedDropdownLink = (props) => {
    const { children, ...otherProps } = props;

    return (
        <>
        {
            ({ toggle }) => (
                <Link { ...otherProps } onClick={ () => { toggle(); } }>
                    { children }
                </Link>
            )
        }
        </>        
    );
};
ExtendedDropdownLink.propTypes = { ...Link.propTypes };
ExtendedDropdownLink.defaultProps = { ...Link.defaultProps };

export { ExtendedDropdownLink };
