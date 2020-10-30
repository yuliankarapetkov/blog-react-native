import React, { useState } from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    const initialSstate = [
        { title: 'Post #1' },
        { title: 'Post #2' },
        { title: 'Post #3' },
    ];

    const [posts, setPosts] = useState(initialSstate);
    
    const addPost = () => setPosts([...posts, { title: `Post #${posts.length + 1}` }]);

    return (
        <BlogContext.Provider value={{ posts, addPost }}>
            {children}
        </BlogContext.Provider>
    )
};

export default BlogContext;
