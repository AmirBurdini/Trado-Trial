import React, {useEffect, useState } from 'react'
import {connect, useDispatch} from 'react-redux'

import ReactSlider from 'react-slider'
import Button from '../atoms/Button'
import TimeList from '../molecules/TimeList'

const Openings = () => {

    const dispatch = useDispatch();

    const [currDay, setCurrDay] = useState('1');
    const [start, setStart] = useState(8);
    const [end, setEnd] = useState(17);
    const [update,setUpdate] = useState(false)

    const changeOpening = () => {
        
        let edit_hours = {
            day : currDay,
            start : start,
            end : end
        }

        setUpdate(!update)

        dispatch({type: `EDIT_HOURS`, payload : edit_hours})
    }

    const hourListener = (values : number[]) => {

        setStart(values[0]);
        setEnd(values[1]);
    }

    return (<div>
        
        <h1>Opening Hours</h1>

        <select onChange = {(e) => {setCurrDay(e.target.value)}}>
            <option value = "1">Monday</option>
            <option value = "2">Tuesday</option>
            <option value = "3">Wednesday</option>
            <option value = "4">Thursday</option>
            <option value = "5">Friday</option>
            <option value = "6">Saturday</option>
            <option value = "7">Sunday</option>
        </select>
        
        <Button name="Apply" function={changeOpening}/>

        <div>
            <ReactSlider
                className="horizontal-slider"
                defaultValue={[0, 23]}
                onChange = {(e) => {hourListener(e)}}
                max = {23}
                min = {0}
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                pearling
                minDistance={6}
            />
        </div>

        <TimeList />
        
    </div>)
}

export default connect()(Openings)