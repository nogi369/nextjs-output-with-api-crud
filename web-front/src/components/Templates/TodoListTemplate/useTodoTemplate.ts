import { useCallback, useMemo, useState } from "react";
import { EventType } from "../../../interfaces/Event";
import { TodoType } from "@/interfaces/Todo";

// params
type Params = {
  originTodoList: Array<TodoType>;
};

// states
type StatesType = {
  searchKeyword: string;
  showTodoList: Array<TodoType>;
};

// actions
type ActionsType = {
  handleChangeSearchKeyword: EventType["onChangeInput"];
};

// export const useTodoTemplate = ({ originTodoList }: Params) => {
export const useTodoTemplate = ({ originTodoList }: Params) => {
  // local state
  const [searchKeyword, setSearchKeyword] = useState("");
  const showTodoList = useMemo(() => {
    const regExp = new RegExp("^" + searchKeyword, "i");
    return originTodoList.filter((todo) => {
      return todo.title.match(regExp);
    });
  }, [originTodoList, searchKeyword]);

  // 検索キーワード変更処理
  const handleChangeSearchKeyword: EventType["onChangeInput"] = useCallback(
    (e) => setSearchKeyword(e.target.value),
    []
  );

  const states: StatesType = { searchKeyword, showTodoList };
  const actions: ActionsType = { handleChangeSearchKeyword };

  return [states, actions] as const;
};
