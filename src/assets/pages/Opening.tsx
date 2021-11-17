import React, {useState } from 'react'
import {connect} from 'react-redux'

import ReactSlider from 'react-slider'

const Openings = () => {

    return (<div>
        
        <h1>Opening Hours</h1>

        <select>
            <option value = "1">Monday</option>
            <option value = "2">Tuesday</option>
            <option value = "3">Wednesday</option>
            <option value = "4">Thursday</option>
            <option value = "5">Friday</option>
            <option value = "6">Saturday</option>
            <option value = "7">Sunday</option>
        </select>
        
        <div>
            <ReactSlider
                className="horizontal-slider"
                defaultValue={[0, 23]}
                max = {23}
                min = {0}
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                pearling
                minDistance={6}
            />
        </div>

    </div>)
}

export default connect()(Openings)