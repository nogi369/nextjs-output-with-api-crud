import { useState, useCallback, useMemo } from "react";
import { NAVIGATION_PATH } from "../../../constants/navigation";
import { TodoType } from "../../../interfaces/Todo";
import { EventType } from "../../../interfaces/Event";
import { useRouter } from "next/router";

type Params = {
  originTodoList: Array<TodoType>;
  updateTodo: (id: number, title: string, content: string) => void;
};

type StatesType = {
  todo: TodoType | undefined;
  inputTitle: string;
  inputContent: string;
};

type ActionsType = {
  handleChangeTitle: EventType["onChangeInput"];
  handleChangeContent: EventType["onChangeTextArea"];
  handleUpdateTodo: EventType["onSubmit"];
};

export const useTodoEditTemplate = ({ originTodoList, updateTodo }: Params) => {
  // 画面遷移操作を実現
  const router = useRouter();
  // メモ化
  const todo = useMemo(
    () => originTodoList.find((todo) => String(todo.id) === router?.query?.id),
    [originTodoList, router?.query?.id]
  );

  // local state

  // todo?.title = undefinedにすることで参照エラーになることを防ぐ
  const [inputTitle, setInputTitle] = useState(todo?.title || "");
  const [inputContent, setInputContent] = useState(todo?.content || "");

  // title変更処理
  const handleChangeTitle: EventType["onChangeInput"] = useCallback(
    (e) => setInputTitle(e.target.value),
    []
  );

  // content変更処理
  const handleChangeContent: EventType["onChangeTextArea"] = useCallback(
    (e) => setInputContent(e.target.value),
    []
  );

  // Todo更新実行処理
  const handleUpdateTodo: EventType["onSubmit"] = useCallback(
    (e) => {
      e.preventDefault();
      // todo.idがある かつ inputTitleが空文字でない かつ inputContentが空文字でない
      if (!!todo?.id && inputTitle !== "" && inputContent !== "") {
        updateTodo(todo.id, inputTitle, inputContent);
        router.push(NAVIGATION_PATH.TOP);
      }
    },
    [router, todo?.id, inputTitle, inputContent, updateTodo]
  );

  const states: StatesType = {
    todo,
    inputTitle,
    inputContent,
  };

  const actions: ActionsType = {
    handleChangeTitle,
    handleChangeContent,
    handleUpdateTodo,
  };

  return [states, actions] as const;
};
