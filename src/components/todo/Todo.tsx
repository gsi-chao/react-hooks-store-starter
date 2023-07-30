const Todo = ({
  text,
  completed,
  onDelete,
  onComplete,
}: {
  text: string;
  completed: boolean;
  onDelete: () => void;
  onComplete: () => void;
}) => {
  const onChangeCompleted = () => {
    onComplete();
  };
  return (
    <div className="flex items-center mb-4 gap-4">
      <input
        type="checkbox"
        checked={completed}
        className="h-4 w-4 accent-green-400"
        onChange={onChangeCompleted}
      />
      <span className={`${completed ? "line-through" : ""} text-white text-lg`}>
        {text}
      </span>
      <button
        className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded ml-2"
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
