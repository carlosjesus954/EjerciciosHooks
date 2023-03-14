export const ItemList = ({id,description, done, onDeleteTodo, onToggleTodo}) => {
  return (
    <div className="global__elements" key={id}>
      <span 
      className={`global__span ${done ? 'tachado' : ''}`}
      onClick={() => onToggleTodo(id)} >{description}</span>
      <button 
      className="global__button"
        onClick={ () => onDeleteTodo(id)}
      >Borrar</button>
    </div>
  );
};
