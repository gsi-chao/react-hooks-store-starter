export interface ITodo {
  text: string;
  completed: boolean;
}

export interface ITodoState {
  items: ITodo[];
  isLoading: boolean;
}

const initialState: ITodoState = {
  items: [],
  isLoading: false,
};

export default initialState;
