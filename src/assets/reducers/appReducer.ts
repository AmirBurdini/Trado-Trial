const appReducer = (state = {page : '',name : '', description : '', url : '',search : '', images : [], opening : {},}, action : any) =>
{
    switch(action.type)
    {
        case('SWITCH_PAGE') :

            let other_page = action.payload;

            return {...state, page : other_page}
    
        case('EDIT_NAME') :

            let new_name = action.payload;

            return {...state, name : new_name}
        
        case('EDIT_DESCRIPTION') :

            let new_description = action.payload;

            return {...state, description : new_description}
       
        case('EDIT_URL') :

            let new_url = action.payload;

            return {...state, url : new_url}

        case('EDIT_SEARCH') :

            let new_search = action.payload;

            return {...state, search : new_search}

        case('EDIT_IMAGES') :

            let new_images = action.payload;

            return {...state, images : new_images}

        default:
            return {...state};
    }
}

export default appReducer;