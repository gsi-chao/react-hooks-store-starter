import { ITodo } from "./initialState";

export type TodoTypes = "ADD_TASK" | "REMOVE_TASK" | "TOGGLE_COMPLETE_TASK";

type Action<T> = {
  type: TodoTypes;
  payload: T;
};

interface IAddTask extends Action<ITodo> {
  type: "ADD_TASK";
}

interface IToogleCompleteTask extends Action<number> {
  type: "TOGGLE_COMPLETE_TASK";
}

interface IRemoveTask extends Action<number> {
  type: "REMOVE_TASK";
}

export type TAction = IAddTask | IRemoveTask | IToogleCompleteTask;
