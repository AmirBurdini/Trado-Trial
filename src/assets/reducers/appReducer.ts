const appReducer = (state = {page : '',name : '', description : '', url : '',search : '', images : [], 
opening : [{day : '1' ,start : 8, end : 17},
           {day : '2' ,start : 8, end : 17},
           {day : '3' ,start : 8, end : 17},
           {day : '4' ,start : 8, end : 17},
           {day : '5' ,start : 8, end : 17},
           {day : '6' ,start : 8, end : 17},
           {day : '7' ,start : 8, end : 17},],
           colors : {primary : '#282c34', secondary : '#000000'}
}, action : any) =>
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

        case('EDIT_HOURS') :

            let new_hours = action.payload;
            let edited_hours = state.opening

            edited_hours[Number(new_hours.day) - 1] = new_hours;

            return {...state, opening : edited_hours}

        case('EDIT_COLORS') :

            let new_colors = action.payload;

            return {...state, colors : new_colors}

        default:
            return {...state};
    }
}

export default appReducer;