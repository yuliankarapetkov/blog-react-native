import createDataContext from './createDataContext';

const initialState = [];

const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'ADD_POST':
            return [...state, { ...payload, id: Date.now() }];
        case 'DELETE_POST':
            return state.filter(p => p.id !== payload)
        default:
            return state;
    }
};

const addPost = dispatch => {
    return post => dispatch({ type: 'ADD_POST', payload: post });
};

const deletePost = dispatch => {
    return id => dispatch({ type: 'DELETE_POST', payload: id });
};

export const { Context, Provider } = createDataContext(
    reducer,
    { 
        addPost,
        deletePost,
    },
    initialState
);
