import TodoItem from 'components/TodoItem';

// eslint-disable-next-line react/prop-types
const TodosList = ({ todosProps, handleChange }) => (
  <ul>
    {/* eslint-disable-next-line react/prop-types */}
    {todosProps.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        handleChange={handleChange}
      />
    ))}
  </ul>
);
export default TodosList;
