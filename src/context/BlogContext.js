import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    const posts = [
        { title: 'Post #1' },
        { title: 'Post #2' },
        { title: 'Post #3' },
    ];

    return (
        <BlogContext.Provider value={posts}>
            {children}
        </BlogContext.Provider>
    )
};

export default BlogContext;
