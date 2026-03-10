import { memo } from 'react';
import Button from './UI/Button/Button';

const Footer = ({ setModalActive }) => {
  return (
    <div className="footer">
      <Button onClick={() => setModalActive(true)}>Clear</Button>
    </div>
  );
};

export default memo(Footer);