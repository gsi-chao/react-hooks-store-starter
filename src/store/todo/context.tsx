import { Dispatch, createContext } from 'react'
import { TAction } from './actions'
import initialState, { ITodoState } from './initialState'

interface IContextProps {
  state: ITodoState
  dispatch: Dispatch<TAction>
}
const TodoContext = createContext<IContextProps>({
  state: initialState,
  dispatch: () => {}
})
export default TodoContext
