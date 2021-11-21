import React, {useState } from 'react'
import {connect} from 'react-redux'
import Form from '../molecules/Form'
import Liveview from '../molecules/Liveview'

const About = () => {

    return (<div>

        <h1>About</h1>

        <Form />
        <Liveview />

    </div>)
}

export default connect()(About)