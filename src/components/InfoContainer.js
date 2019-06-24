import React from 'react';

function InfoContainer(props) {
    return (
        <div className={"info-container"}>
            {props.children}
        </div>
    );
}

export default InfoContainer;