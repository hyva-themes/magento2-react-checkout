import React from 'react';

export const SkeletonBlock = ({ children, classes, ...props }) => {
    return (
        <span
            className={
                'box-content block bg-container-darker animate-pulse border-block ' +
                classes
            }
            {...props}
        >
            {children}
        </span>
    );
};
