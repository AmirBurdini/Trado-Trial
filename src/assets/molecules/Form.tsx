import React, {FC} from 'react'
import {connect} from 'react-redux'
import TextInput from '../atoms/TextInput'

const Form : FC = () : JSX.Element => {

    return (<div>
        <TextInput content = {''} name = {"NAME"}/> <br/> <hr />
        <TextInput content = {''} name = {"DESCRIPTION"}/> <br/> <hr />
        <TextInput content = {''} name = {"URL"}/> <br/> <hr />
    </div>)
}

export default connect()(Form)