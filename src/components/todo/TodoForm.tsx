import { useState } from "react";

interface TodoFormProps {
  handleFormSubmit: (_: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ handleFormSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmitLocal = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleFormSubmit(inputValue);
    setInputValue("");
  };
  return (
    <form onSubmit={handleFormSubmitLocal} className="mb-4 flex justify-center items-center">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a new todo"
        className="border border-gray-400 rounded py-2 px-3 w-full"
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded ml-2"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
