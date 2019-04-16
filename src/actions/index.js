let nextTodoId = 0;
let nextCommentId = 0;

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: text + nextTodoId++,
    text
});

export const deleteTodo = id => ({
    type: 'DELETE_TODO',
    id: id,
});

export const addComment = comment => ({
    type: 'ADD_COMMENT',
    id: nextCommentId++,
    comment
});

