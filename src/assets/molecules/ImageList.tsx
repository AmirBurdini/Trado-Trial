import React, {FC} from 'react'
import {connect, useDispatch, useSelector} from 'react-redux'
import Image from '../atoms/Image'

const ImageList : FC = () : JSX.Element => {

    interface RootState {
        images : [string]
    }

    let images : [string] = useSelector((state : RootState) => state.images)

    const renderList = () => {
        
        if(images === undefined ) {
            return <div></div>
        } else {
            let items = images.map((img, index) => {
                return <Image key = {index} url = {img}/>
            })
            return items
        }
    }

    return (<div>
        {renderList()}
    </div>)
}

export default connect()(ImageList)