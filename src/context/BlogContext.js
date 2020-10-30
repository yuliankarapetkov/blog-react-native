import createDataContext from './createDataContext';

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

const addPost = dispatch => {
    return () => dispatch({ type: 'ADD_POST' });
};

export const { Context, Provider } = createDataContext(
    reducer,
    { addPost },
    initialState
);
