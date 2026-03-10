import { memo } from 'react';
import FormTodo from './FormTodo';

const Header = ({ createTodo }) => {
  return (
    <div className="header">
      <FormTodo createTodo={createTodo} />
    </div>
  );
};

export default memo(Header);