import React, { FC, useState } from 'react'
import {connect, useDispatch} from 'react-redux'

import Time from '../atoms/Time'

const TimeList : FC = () : JSX.Element => {

    return (<div>
        <table>
            <tr>
                <Time day = "monday" start = "8:00" end = "17:00"/>
            </tr>
            <tr>
                <Time day = "tuesday" start = "8:00" end = "17:00"/>
            </tr>
            <tr>
                <Time day = "wednesday" start = "8:00" end = "17:00"/>
            </tr>
            <tr>
                <Time day = "thursday" start = "8:00" end = "17:00"/>
            </tr>
            <tr>
                <Time day = "friday" start = "8:00" end = "17:00"/>
            </tr>
            <tr>
                <Time day = "saturday" start = "8:00" end = "17:00"/>
            </tr>
            <tr>
                <Time day = "sunday" start = "8:00" end = "17:00"/>
            </tr>

        </table>
        
        
        
        
        
        

    </div>)
}

export default connect()(TimeList)