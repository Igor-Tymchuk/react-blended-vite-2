import { EditForm, Form, Text, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(window.localStorage.getItem('todos')) || [],
  );
  const [currentToDo, setCurrentTodo] = useState(null);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = text => {
    setTodos(prev => [...prev, { text, id: nanoid() }]);
  };
  const deleteTodo = id => {
    setTodos(prevState => prevState.filter(item => item.id !== id));
  };

  const handleEditTodo = todo => {
    setCurrentTodo(todo);
  };
  const updateToDo = text => {
    setTodos(prevState =>
      prevState.map(item =>
        item.id === currentToDo.id ? { ...currentToDo, text } : item,
      ),
    );
    cancelUpdate();
  };

  const cancelUpdate = () => {
    setCurrentTodo(null);
  };

  return (
    <>
      {currentToDo ? (
        <EditForm
          defaultValue={currentToDo.text}
          updateToDo={updateToDo}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <Form onSubmit={addTodo} />
      )}
      {todos.length ? (
        <TodoList
          todos={todos}
          onDelete={deleteTodo}
          handleEditTodo={handleEditTodo}
        />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
