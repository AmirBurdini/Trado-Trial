import React, {FC} from 'react'
import {connect, useDispatch, useSelector} from 'react-redux'
import Button from '../atoms/Button'
import TextInput from '../atoms/TextInput'

const Axios = require('axios')

interface RootState {
    search : string
}

const ImageFetcher : FC = () : JSX.Element => {

    const dispatch = useDispatch()

    let search : string = useSelector((state : RootState) => state.search)

    const getImages = async() => {

        let configs = {
            params : {
                key : '24335420-4126b02bd34aef1f00386a51c',
                q : search
            }
        }

        let resp = await Axios.get(`https://pixabay.com/api`, configs)

        if (resp.status === 200) {
            
            let all_images : [string] = ['']
            resp.data.hits.forEach((img : any) => {

                all_images.push(img.userImageURL)
            })

            all_images.splice(0,1)

            dispatch({type: `EDIT_IMAGES`, payload : all_images})
        }

    }

    return (<div>
        <TextInput content = {''} name = {"SEARCH"}/> <br/> <hr />
        <Button name='get images' fetch={getImages} />
    </div>)
}

export default connect()(ImageFetcher)