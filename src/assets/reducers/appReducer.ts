const appReducer = (state = {name : '', description : '', url : '', images : [], opening : {}}, action : any) =>
{
    switch(action.type)
    {
        case('EDIT_NAME') :

            let new_name = action.payload;

           return {...state, name : new_name}
        
        case('EDIT_DESCRIPTION') :

           let new_description = action.payload;

          return {...state, description : new_description}
       
        case('EDIT_URL') :

          let new_url = action.payload;

         return {...state, description : new_url}


        default:
            return {...state};
    }
}

export default appReducer;