import Button from './UI/Button/Button';

const TodoItem = ({ todo, removeTodo, completeTodo, index }) => {
  return (
    <div className="item">
      {todo.completed ? (
        <div className="item__content">
          <strong style={{ textDecoration: 'line-through' }}>
            {index}. {todo.title}
          </strong>
          <Button onClick={() => removeTodo(todo)}>Delete</Button>
        </div>
      ) : (
        <div className="item__content">
          <strong>
            {index}. {todo.title}
          </strong>
          <Button onClick={() => completeTodo(todo)}>Done</Button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;