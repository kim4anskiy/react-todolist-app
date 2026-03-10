import TodoList from './TodoList';
import Loader from './UI/Loader/Loader';
import { memo } from 'react';

const Main = ({ completeTodo, todos, removeTodo, isTodosLoading }) => {
  return (
    <div className="main">
      {isTodosLoading ? (
        <div className="loader-overlay">
          <Loader />
        </div>
      ) : (
        <TodoList
          completeTodo={completeTodo}
          todos={todos}
          removeTodo={removeTodo}
        />
      )}
    </div>
  );
};

export default memo(Main);