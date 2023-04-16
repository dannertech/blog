export const reducer = (state, action) => {
    switch(action.type){
        case "ADD_POST":
            return [...state, {title: action.payload}]
        default:
            return state;
    }
};

//could do initial state here but I'm going to do it when I useReducer pun intended