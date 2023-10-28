// https://ja.legacy.reactjs.org/docs/context.html

import { FC, ReactNode, createContext, useContext } from "react";
import { useTodo } from "../hooks/useTodo";
import { TodoType } from "../interfaces/Todo";

// ReactNode
// https://maku.blog/p/xenv4bh/
type Props = {
  children: ReactNode;
};

interface ContextInterface {
  originTodoList: Array<TodoType>;
  addTodo: (title: string, content: string) => void;
  updateTodo: (id: number, title: string, content: string) => void;
  deleteTodo: (targetId: number, targetTitle: string) => void;
}

// {} = 空のオブジェクトを作成
const TodoContext = createContext({} as ContextInterface);

// children: https://choippo.com/react-component-children/
// useTodoからstateとpropsを取り出す
/**
 * TodoProvider
 * @param children
 * @constructor
 */
const TodoProvider: FC<Props> = ({ children }) => {
  const { originTodoList, addTodo, updateTodo, deleteTodo } = useTodo();

  // Context.Provider で配下コンポーネントにContextを提供する
  return (
    <TodoContext.Provider
      value={{
        originTodoList,
        addTodo,
        updateTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

/**
 * useTodoContext
 */
const useTodoContext = () => useContext(TodoContext);

export { TodoProvider, useTodoContext };
