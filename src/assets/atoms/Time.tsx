import React, { FC } from 'react'
import {connect} from 'react-redux'

interface Props {
    day : string;
    start : string;
    end : string;
}

const Time : FC<Props> = (props) : JSX.Element => {

    return (<div>
        <h3>{props.day + " : " + props.start + " - " + props.end}</h3>
    </div>)
}

export default connect()(Time)