import React from "react";

const ProgressBar = (props) => {
    const { completed } = props;

    const containerStyles = {
        top: 0,
        height: 20,
        width: '100%',
        backgroundColor: "#b6f0e4",
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: "#19cca5",
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 1s ease-in-out',
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}></span>
            </div>
        </div>
    );
};

export default ProgressBar;
