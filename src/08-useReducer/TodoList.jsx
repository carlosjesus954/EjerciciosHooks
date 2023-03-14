import { ItemList } from "./ItemList";

export const TodoList = ({
  id,
  description,
  onDeleteTodo,
  onToggleTodo,
  done,
}) => {
  return (
    <ItemList
      id={id}
      description={description}
      onDeleteTodo={onDeleteTodo}
      onToggleTodo={onToggleTodo}
      done={done}
    />
  );
};
