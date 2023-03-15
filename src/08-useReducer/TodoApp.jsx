import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
  const { todos,todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } =
    useTodo();
  return (
    <div className="global__container">
      <h1 className="global__h1">
        TodoApp : {todosCount} <small className="global__small" >Pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />
      <div className="global__col">
        <div className="global__divs">
          {todos.map((value) => (
            <TodoList
              key={value.id}
              id={value.id}
              done={value.done}
              description={value.description}
              onDeleteTodo={handleDeleteTodo}
              onToggleTodo={handleToggleTodo}
            />
          ))}
        </div>
        <div className="global__divs">
          <h2 className="global__h2">Agregar TODO</h2>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </div>
  );
};
