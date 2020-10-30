import createDataContext from './createDataContext';

const initialState = [
    {
        id: 1,
        title: 'First',
        content: 'ye ye'
    }
];

const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'ADD_POST':
            return [...state, { ...payload, id: Date.now() }];
        case 'UPDATE_POST': {
            const { id, post } = payload;

            return state.map(p => p.id === id ? { ...p, ...post } : p);
        }
        case 'DELETE_POST':
            return state.filter(p => p.id !== payload)
        default:
            return state;
    }
};

const addPost = dispatch => {
    return post => dispatch({ type: 'ADD_POST', payload: post });
};

const updatePost = dispatch => {
    return (id, post) => dispatch({ type: 'UPDATE_POST', payload: { id, post } });
};

const deletePost = dispatch => {
    return id => dispatch({ type: 'DELETE_POST', payload: id });
};

export const { Context, Provider } = createDataContext(
    reducer,
    { 
        addPost,
        updatePost,
        deletePost,
    },
    initialState
);
