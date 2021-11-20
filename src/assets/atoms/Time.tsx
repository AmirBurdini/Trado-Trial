import React, { FC } from 'react'

interface Props {
    day : string;
    time : {start : number, end : number}
}

const Time : FC<Props> = (props) : JSX.Element => {

    return (<div>
        <h3>{props.day + " : " + props.time.start + ":00 - " + props.time.end + ":00"}</h3>
    </div>)
}

export default (Time)