import React, { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import Time from '../atoms/Time'

interface RootState {
    opening : {day : string, start : number, end : number}[];
}

const TimeList : FC = () : JSX.Element => {

    let hours : {day : string, start : number, end : number}[] = useSelector((state : RootState) => state.opening)
    const [times, setTimes] = useState(hours)

    return (<div>
        <table className = "timelist">
            <tr>
                <Time day = "monday" time = {times[0]}/>
            </tr>
            <tr>
                <Time day = "tuesday" time = {times[1]}/>
            </tr>
            <tr>
                <Time day = "wednesday" time = {times[2]}/>
            </tr>
            <tr>
                <Time day = "thursday" time = {times[3]}/>
            </tr>
            <tr>
                <Time day = "friday" time = {times[4]}/>
            </tr>
            <tr>
                <Time day = "saturday" time = {times[5]}/>
            </tr>
            <tr>
                <Time day = "sunday" time = {times[6]}/>
            </tr>

        </table>
    </div>)
}

export default (TimeList)