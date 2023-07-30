'use client';

import { useContext } from 'react'
import TodoContext from './context'

const useTodoContext = () => {
  return useContext(TodoContext)
}

export default useTodoContext
