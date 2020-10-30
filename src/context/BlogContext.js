import React, { useReducer } from 'react';

const BlogContext = React.createContext();

const initialState = [
    { title: 'Post #1' },
    { title: 'Post #2' },
    { title: 'Post #3' },
];

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [...state, { title: `Post #${state.length + 1}` }];
        default:
            return state;
    }
};

export const BlogProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const addPost = () => dispatch({ type: 'ADD_POST' })

    return (
        <BlogContext.Provider value={{ posts: state, addPost }}>
            {children}
        </BlogContext.Provider>
    )
};

export default BlogContext;
