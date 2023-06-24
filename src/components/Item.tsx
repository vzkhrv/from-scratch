import { DeleteButton } from "./DeleteButton";
import "./styles.css";

interface Props {
  /**
   * Идентификатор
   */
  id: string;

  /**
   * Заголовок
   */
  header: string;

  /**
   * Статус готовности
   */
  done: boolean;

  /**
   * Метод для удаления задачи
   */
  onDelete: (id: Task["id"]) => void;
  /**
   * Метод для выполнения задачи
   */
  onToggle: (id: Task["id"]) => void;
}

/**
 * Элемент списка задач, используется вместе с List
 */
export const Item = (props: Props) => {
  return (
    <li className="item-wrapper">
      <input
        type="checkbox"
        id={props.id}
        defaultChecked={props.done}
        onChange={() => props.onToggle(props.id)}
      />
      <label htmlFor={props.id} onClick={() => props.onToggle(props.id)}>
        {props.done ? <s>{props.header}</s> : props.header}
      </label>
      <DeleteButton
        disabled={!props.done}
        onClick={() => props.onDelete(props.id)}
      />
    </li>
  );
};
