import React, { FC, useState } from 'react'
import {connect, useDispatch} from 'react-redux'

import Time from '../atoms/Time'

const TimeList : FC = () : JSX.Element => {

    return (<div>
        <Time day = "monday" start = "8:00" end = "17:00"/>
        <Time day = "tuesday" start = "8:00" end = "17:00"/>
        <Time day = "wednesday" start = "8:00" end = "17:00"/>
        <Time day = "thursday" start = "8:00" end = "17:00"/>
        <Time day = "friday" start = "8:00" end = "17:00"/>
        <Time day = "saturday" start = "8:00" end = "17:00"/>
        <Time day = "sunday" start = "8:00" end = "17:00"/>

    </div>)
}

export default connect()(TimeList)