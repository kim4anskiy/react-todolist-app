import TodoItem from './TodoItem';
import { v4 as uuidv4 } from 'uuid';

const TodoList = ({ todos, removeTodo, completeTodo }) => {
  return (
    <div className="todolist">
      {todos.length ? (
        <div className="todolist__container">
          {todos.map((item, index) => (
            <TodoItem
              index={index + 1}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              key={uuidv4()}
              todo={item}
            />
          ))}
        </div>
      ) : (
        <h1
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30px',
          }}
        >
          Задач нет
        </h1>
      )}
    </div>
  );
};

export default TodoList;