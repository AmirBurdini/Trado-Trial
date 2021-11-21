import React, {useState } from 'react'
import {connect} from 'react-redux'
import FileUpload from '../atoms/FileUpload'

const FileUploader = () => {

    return (<div>

        <h1>Business Logo Uplaod</h1>

        <FileUpload />

    </div>)
}

export default connect()(FileUploader)