import { useDispatch, useSelector } from "react-redux";
import { Empty } from "src/components/Empty";
import { Item } from "src/components/Item";
import {
  completeTask,
  deleteTask,
  tasksSelector,
  toggleTask,
} from "src/store/taskSlice";

export const TaskList = () => {
  const items = useSelector(tasksSelector);
  const dispatch = useDispatch();

  const handleDelete = (id: Task["id"]) => {
    dispatch(deleteTask(id));
  };

  const handleToggle = (id: Task["id"]) => {
    dispatch(toggleTask(id));
  };

  return items.length > 0 ? (
    <ul className="task-list">
      {items.map((item) => (
        <Item
          {...item}
          key={item.id}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      ))}
    </ul>
  ) : (
    <Empty />
  );
};
