import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';

export const useTodo = () => {
  const initialState = []

  const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  }

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo,
    }
    dispatch(action);
  }

  const handleDeleteTodo = (id) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id,
    });
  }

  const handleToggleTodo = (id) => {
    dispatch({
      type: '[TODO] Check Todo',
      payload: id,
    });
  }

  const countDoneTodos = () => {
    return todos.filter(todo => !todo.done).length;
  }

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    countDoneTodos
  }
}
