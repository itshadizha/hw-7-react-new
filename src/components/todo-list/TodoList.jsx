import Todo from "./Todo";

const TodoList = ({ todos, onDeleteTodo, onToggleTodo, onEditTodo }) => {
  return (
    <>
      {todos.map((todo) => (
        <Todo
        onEditTodo={onEditTodo}
          todo={todo}
          key={todo.id}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </>
  );
};

export default TodoList;
