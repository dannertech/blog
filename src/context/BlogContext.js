import React, {createContext, useState} from 'react';

export const BlogContext = createContext();




export const BlogProvider = ({children}) => {
    const data = [
        {
            title: 'Blog Post #1'
        },
        {
            title: 'Blog Post #2'
        }
    ]
    const [blogPosts, setBlogPosts] = useState(data); 
   
return(
    <BlogContext.Provider value={{blogPosts, setBlogPosts}}>
        {children}
    </BlogContext.Provider>
)
};