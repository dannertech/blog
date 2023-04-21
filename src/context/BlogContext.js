import React, {createContext, useState, useReducer} from 'react';
import {reducer} from '../reducer/BlogReducer.js';
export const BlogContext = createContext();




export const BlogProvider = ({children}) => {
    const data = [
        {
            title: 'Blog Post #1',
            key: 12345
        },
        {
            title: 'Blog Post #2',
            key: 123456
        }
    ]
    //useState here
    //const [blogPosts, setBlogPosts] = useState(data); 
    //useReducer here
    const [state, dispatch] = useReducer(reducer,data);
   
return(
    <BlogContext.Provider value={{state, dispatch}}>
        {children}
    </BlogContext.Provider>
)
};