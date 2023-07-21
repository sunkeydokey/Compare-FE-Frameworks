type Prop = {
  id: number;
  todo: string;
  onRemove: (id: number) => void;
};

const TodoItem = ({ id, todo, onRemove }: Prop) => {
  return (
    <article>
      <span>{todo}</span> <button onClick={() => onRemove(id)}>Delete</button>
    </article>
  );
};

export default TodoItem;
