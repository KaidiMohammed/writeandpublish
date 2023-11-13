export const initialState = { title: '', content: '' };
export const reducer = (state: any, action: { type: string; payload: any }) => {
    if (action.type === 'setTitle') {
        return {
            ...state,
            title: action.payload,
        };
    }
    if (action.type === 'setContent') {
        return {
            ...state,
            content: action.payload,
        };
    }
};