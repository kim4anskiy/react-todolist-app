import Modal from './UI/Modal/Modal';
import Button from './UI/Button/Button';
import iconImage from '../icons/delet-ca1adcc047e713b322c18d7702313c04.png';
import { memo } from 'react';

const ClearModal = ({ modalActive, setModalActive, clearTodos }) => {
  return (
    <Modal active={modalActive} setActive={setModalActive}>
      <h5>Удалить весь список?</h5>
      <img
        src={iconImage}
        alt="Иконка корзины"
        style={{
          display: 'block',
          width: '7vw',
          height: '7vh',
          objectFit: 'contain',
          margin: '0px auto',
        }}
      ></img>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          marginTop: '10px',
        }}
      >
        <Button onClick={clearTodos} style={{ padding: '3px' }}>
          Да
        </Button>
        <Button
          onClick={() => setModalActive(false)}
          style={{ padding: '3px' }}
        >
          Нет
        </Button>
      </div>
    </Modal>
  );
};

export default memo(ClearModal);