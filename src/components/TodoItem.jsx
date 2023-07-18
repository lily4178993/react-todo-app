/* eslint-disable react/prop-types */
const TodoItem = ({ itemProp, handleChange }) => (
  <li>
    <input
      type="checkbox"
      checked={itemProp.completed}
      onChange={() => handleChange(itemProp.id)}
    />
    {itemProp.title}
  </li>
);
export default TodoItem;
