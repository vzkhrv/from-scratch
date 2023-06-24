import { Item } from "./Item";

type Props = {
  /**
   * Элементы списка
   */
  items: Task[];

  /**
   * Колбэк для удаления задачи
   */
  onDelete: (id: Task["id"]) => void;

  /**
   * Колбэк для выполнения задачи
   */
  onToggle: (id: Task["id"]) => void;
};

export const List = ({ items, onDelete, onToggle }: Props) => (
  <ul className="task-list tasks">
    {items.map((item) => (
      <Item
        {...item}
        key={item.id}
        onDelete={onDelete}
        onToggle={onToggle} />
    ))}
  </ul>
);
