import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useTodos } from './components/hooks/useTodos';
import ClearModal from './components/ClearModal';

function App() {
  const [isTodosLoading, setIsTodosLoading] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  const { createTodo, completeTodo, removeTodo, clearTodos, todos, setTodos } =
    useTodos(setModalActive);

  const fetchTodos = async () => {
    try {
      setIsTodosLoading(true);
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      );
      setTodos(response.data.slice(0, 10));
      setIsTodosLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="App">
      <Header createTodo={createTodo} />
      <Main
        isTodosLoading={isTodosLoading}
        completeTodo={completeTodo}
        todos={todos}
        removeTodo={removeTodo}
      />
      <Footer setModalActive={setModalActive} />
      <ClearModal
        clearTodos={clearTodos}
        modalActive={modalActive}
        setModalActive={setModalActive}
      />
    </div>
  );
}

export default App;