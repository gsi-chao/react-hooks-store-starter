import TodoContainer from "./components/todo/TodoContainer";
import { TodoProvider } from "./store/todo";
import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-50">
      <TodoProvider>
        <TodoContainer />
      </TodoProvider>
    </div>
  );
}

export default App;
