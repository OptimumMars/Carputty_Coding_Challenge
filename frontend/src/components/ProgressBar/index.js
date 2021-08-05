import React from "react";

const ProgressBar = (props) => {
    const { completed } = props;

    const containerStyles = {
        top: 0,
        height: 20,
        width: '100%',
        backgroundColor: "#68eba3",
        // borderRadius: 50,
        // margin: 50
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: "#3cb371",
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
                <span style={labelStyles}>{`${completed}%`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;
