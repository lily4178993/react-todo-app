import TodoItem from 'components/TodoItem';

// eslint-disable-next-line react/prop-types
const TodosList = ({ todosProps, handleChange, delTodo }) => (
  <ul>
    {/* eslint-disable-next-line react/prop-types */}
    {todosProps.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        handleChange={handleChange}
        delTodo={delTodo}
      />
    ))}
  </ul>
);
export default TodosList;
