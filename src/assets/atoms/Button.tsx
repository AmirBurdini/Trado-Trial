import React, { FC, useState } from 'react'
import {connect, useDispatch} from 'react-redux'

interface Props {
    name : string;
    fetch : () => void;
}

const Button : FC<Props> = (props) : JSX.Element => {

    return (<button onClick = {props.fetch}>{props.name}</button>)
}

export default connect()(Button)