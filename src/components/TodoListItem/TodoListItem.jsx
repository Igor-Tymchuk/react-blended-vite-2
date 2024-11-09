import style from './TodoListItem.module.css';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { Text } from 'components';

export const TodoListItem = ({ text, count, onDelete, id, handleEditTodo }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{count}
      </Text>
      <Text>{text}</Text>
      <button
        onClick={() => onDelete(id)}
        className={style.deleteButton}
        type="button"
      >
        <RiDeleteBinLine size={24} />
      </button>
      <button
        className={style.editButton}
        type="button"
        onClick={() => handleEditTodo({ text, id })}
      >
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};
