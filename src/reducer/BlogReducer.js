export const reducer = (state, action) => {
    switch(action.type){
        case "ADD_POST":
            console.log(state)
            return [...state, {title: action.payload.title, key: action.payload.key}];
        case "DELETE_POST":
            return [...state].filter((item) => item.key != action.payload.key);
        case "EDIT_POST":
            return [...state, {...action.payload}]
        default:
            return state;
    }
};

//could do initial state here but I'm going to do it when I useReducer pun intended