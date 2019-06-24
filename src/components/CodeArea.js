import React from 'react';

function CodeArea(props) {
    return (
        <div className={"code-area-container"}>
            {props.children}
        </div>
    );
}

export default CodeArea;
