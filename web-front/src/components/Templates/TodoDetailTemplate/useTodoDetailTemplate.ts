import { fetchTodoDetailApi } from "@/apis/todoApi";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { TodoType } from "@/interfaces/Todo";

type StatesType = {
  todo: TodoType | undefined;
};

export const useTodoDetailTemplate = () => {
  const router = useRouter();
  // Todo定義
  const [todo, setTodo] = useState<TodoType | undefined>(undefined);

  const fetchTodoDetail = useCallback(async () => {
    // targetId = 文字列型
    const targetId = router?.query?.id;
    // https://qiita.com/Naughty1029/items/8ba37d17d85aa960d383#%E3%81%AE%E6%84%8F%E5%91%B3
    if (
      // targetId = 文字列型 => 数値型に変換する処理
      !!targetId &&
      typeof targetId === "string" &&
      !Number.isNaN(Number(targetId))
    ) {
      const data = await fetchTodoDetailApi(Number(targetId));
      setTodo(typeof data === "object" ? data : undefined);
    }
  }, [router?.query?.id]);

  useEffect(() => {
    fetchTodoDetail();
  }, [fetchTodoDetail]);

  const states: StatesType = {
    todo,
  };

  return [states] as const;
};
