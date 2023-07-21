import { todoItem } from '../types/types';
import TodoItem from './TodoItem';

type Props = {
  todos: todoItem[];
  onRemove: (id: number) => void;
};

const TodoList = ({ todos, onRemove }: Props) => {
  return (
    <section>
      <ul>
        {todos.map((todo: todoItem) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            todo={todo.todo}
            onRemove={onRemove}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
