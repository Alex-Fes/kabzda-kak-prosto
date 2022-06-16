import React from "react";

type PropsType = {
    on: boolean
}

function OnOff(props: PropsType) {
    const onStyle = {
        width: '25px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',

        padding: '2px'
    };
    const offStyle = {
        width: '25px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px'
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px'
    };

    return <div>
            <div style={onStyle}>On</div>
            <div style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
    </div>


}

export default OnOff;