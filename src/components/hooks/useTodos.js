import { useCallback, useState } from 'react';

export const useTodos = setModalActive => {
  const [todos, setTodos] = useState([]);

  const createTodo = useCallback(newTodo => {
    if (newTodo === '') return;
    setTodos(prev => [...prev, { title: newTodo, id: Date.now() }]);
  }, []);

  const completeTodo = useCallback(todo => {
    const newTodo = {
      ...todo,
      completed: true,
    };

    setTodos(prev => [
      ...prev.map(item => {
        return item.id === todo.id ? newTodo : item;
      }),
    ]);
  }, []);

  const clearTodos = useCallback(() => {
    setTodos([]);
    setModalActive(false);
  }, [setModalActive]);

  const removeTodo = useCallback(todo => {
    setTodos(prev => [...prev.filter(item => item.id !== todo.id)]);
  }, []);

  return { createTodo, removeTodo, completeTodo, todos, setTodos, clearTodos };
};