import { useState } from 'react';
import Button from './UI/Button/Button';
import Input from './UI/Input/Input';

const FormTodo = ({ createTodo }) => {
  const [todo, setTodo] = useState('');

  return (
    <div className="form-todo">
      <Input
        value={todo}
        onChange={e => setTodo(e.target.value)}
        placeholder="Введите задачу..."
      />
      <Button
        onClick={() => {
          createTodo(todo);
          setTodo('');
        }}
      >
        Add
      </Button>
    </div>
  );
};

export default FormTodo;