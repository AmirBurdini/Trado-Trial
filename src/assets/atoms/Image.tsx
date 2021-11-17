import React, { FC } from 'react'

interface Props {
    url : string;
}

const Image : FC<Props> = (props) : JSX.Element => {

    return (<img src = {props.url} alt = "" />)
}

export default (Image)