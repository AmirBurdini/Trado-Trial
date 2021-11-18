import React, {FC} from 'react'
import {connect, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

interface RootState {
    name : string;
    description: string;
    url: string;
}

const Liveview : FC = () : JSX.Element => {

    let name : string = useSelector((state : RootState) => state.name)
    let description : string = useSelector((state : RootState) => state.description)
    let url : string = useSelector((state : RootState) => state.url)

    return (<div className = "live-view">
        <h1>{name}</h1> <br />
        <div>
            <p>{description}</p> <br />
            <Link to = {url}>{url}</Link> <br />
        </div>        
    </div>)
}

export default connect()(Liveview)