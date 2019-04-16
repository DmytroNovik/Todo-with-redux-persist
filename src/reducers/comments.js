const comments = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [
                ...state,
                {
                    id: action.id,
                    comment: action.comment,
                }
            ];
        default:
            return state
    }
};

export default comments;
