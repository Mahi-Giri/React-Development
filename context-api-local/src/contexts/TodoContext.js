import { createContext, useContext } from "react";

// Create a context object
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Task 1",
            completed: false,
        },
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleCompletion: (id) => {},
});

// Create a provider and provide to the context
export const TodoProvider = TodoContext.Provider;

// Create a function that will be called useContext when the context is created and returns
export const useTodo = () => {
    return useContext(TodoContext);
};
