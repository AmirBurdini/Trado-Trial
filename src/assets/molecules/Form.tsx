import React, {FC} from 'react'
import {connect, useSelector} from 'react-redux'
import TextInput from '../atoms/TextInput'

interface RootState {
    name : string;
    description: string;
    url: string;
}

const Form : FC = () : JSX.Element => {

    let name : string = useSelector((state : RootState) => state.name)
    let description : string = useSelector((state : RootState) => state.description)
    let url : string = useSelector((state : RootState) => state.url)


    return (<div>
        <TextInput content = {name} name = {"NAME"}/> <br/> <hr />
        <TextInput content = {description} name = {"DESCRIPTION"}/> <br/> <hr />
        <TextInput content = {url} name = {"URL"}/> <br/> <hr />
    </div>)
}

export default connect()(Form)