import React, { FC, useState } from 'react'
import {connect, useDispatch} from 'react-redux'

interface Props {
    name : string;
    function : () => void;
}

const Button : FC<Props> = (props) : JSX.Element => {

    return (<button className = "button-input" onClick = {props.function}>{props.name}</button>)
}

export default connect()(Button)