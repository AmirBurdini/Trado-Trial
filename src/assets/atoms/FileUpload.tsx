import React, { FC, useState } from 'react'
import {connect, useDispatch} from 'react-redux'

import Axios from 'axios'

const FileUpload : FC = () : JSX.Element => {

    const dispatch = useDispatch()

    const saveContent = async(value : FileList | null) => {

        if (value !== null) {

            // let resp = await Axios.post('http://localhost:8082', x)

            let resp = await Axios({
                method: "POST",
                url: 'http://localhost:8082',
                data: value[0],
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })

            console.log(resp);
            
            // dispatch({type: `EDIT_COLORS`, payload : resp})
        }
    }

    return (
    <input className = "file-input" type = "file" onChange = {(e) => saveContent(e.target.files)}/>)
}

export default connect()(FileUpload)