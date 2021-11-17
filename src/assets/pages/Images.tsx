import React, {useState } from 'react'
import {connect} from 'react-redux'
import ImageFetcher from '../molecules/ImageFetcher'
import ImageList from '../molecules/ImageList'

const Images = () => {

    return (<div>
        
        <h1>Images</h1>

        <ImageFetcher />
        <ImageList />

        </div>)
}

export default connect()(Images)