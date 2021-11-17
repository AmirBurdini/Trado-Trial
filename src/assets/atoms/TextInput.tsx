import React, { FC, useState } from 'react'
import {connect, useDispatch} from 'react-redux'

interface Props {
    content : string;
    name : string; 
}

const TextInput : FC<Props> = (props) : JSX.Element => {

    const [content, setContent] = useState(props.content)
    const dispatch = useDispatch()

    const saveContent = (value : string) => {

        setContent(value)
        dispatch({type: `EDIT_${props.name}`, payload : content})
    }

    return (<input type = "text" placeholder = {props.name} onChange = {(e) => saveContent(e.target.value)}/>)
}

export default connect()(TextInput)