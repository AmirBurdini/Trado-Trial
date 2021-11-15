import React, { useState } from 'react'
import {connect} from 'react-redux'

interface Props {
    content : string;
    name : string; 
}

const TextInput : React.FC<Props> = (props) : JSX.Element => {

    const [content, setContent] = useState(props.content)

    const saveContent = (value : string) => {

        setContent(value)
        

    }

    return (<input type = "text" placeholder = {props.name} onChange = {(e) => saveContent(e.target.value)}/>)
}

export default connect()(TextInput)