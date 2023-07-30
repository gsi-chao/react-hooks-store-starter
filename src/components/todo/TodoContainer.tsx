import { useTodoContext } from "../../store/todo";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoContainer = () => {
  const todoContext = useTodoContext();

  const onAddTodo = (item: string) => {
    todoContext.dispatch({
      type: "ADD_TASK",
      payload: { text: item, completed: false },
    });
  };

  const onDeleteTodo = (index: number) => {
    todoContext.dispatch({ type: "REMOVE_TASK", payload: index });
  };

  const onToogleCompleteTodo = (index: number) => {
    todoContext.dispatch({ type: "TOGGLE_COMPLETE_TASK", payload: index });
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full h-full lg:w-1/4 lg:h-auto min-h-[400px] bg-gray-900 p-8 overflow-x-hidden overflow-y-auto rounded-md shadow-2xl shadow-gray-600">
        <h1 className="text-center text-4xl font-bold mb-4 text-white">
          ✅ Todo List
        </h1>
        <TodoForm handleFormSubmit={onAddTodo} />
        {todoContext.state.items.map((todo, key) => (
          <Todo
            key={key}
            text={todo.text}
            completed={todo.completed}
            onDelete={() => onDeleteTodo(key)}
            onComplete={() => onToogleCompleteTodo(key)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoContainer;
