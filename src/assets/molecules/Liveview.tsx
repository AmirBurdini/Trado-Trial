import React, {FC} from 'react'
import {connect, useSelector} from 'react-redux'

interface RootState {
    name : string;
    description: string;
    url: string;
}

const Liveview : FC = () : JSX.Element => {

    let name : String = useSelector((state : RootState) => state.name)
    let description : String = useSelector((state : RootState) => state.description)
    let url : String = useSelector((state : RootState) => state.url)

    return (<div>
        <h1>{name}</h1>
        <p>{description}</p>
        <a>{url}</a>

    </div>)
}

export default connect()(Liveview)