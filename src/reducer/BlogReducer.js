export const reducer = (state, action) => {
    switch(action.type){
        case "ADD_POST":
          
            return [...state, {title: action.payload.title, key: action.payload.key}];
        case "DELETE_POST":
            return [...state].filter((item) => item.key != action.payload);
        case "EDIT_POST":
            //get current post
            //set to edited text
    
            return [...state].map((item) => {
                if(item.key == action.payload.key){
                    item.title = action.payload.title
                    return item;
                } else {
                    return item;
                }
            })
           
        default:
            return state;
    }
};

//could do initial state here but I'm going to do it when I useReducer pun intended