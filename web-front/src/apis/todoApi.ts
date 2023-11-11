import { TodoType } from "@/interfaces/Todo";
import { AxiosResponse } from "axios";
import { globalAxios, isAxiosError } from "./config";

// TodoList取得API
export const fetchTodoListApi = async () => {
  try {
    const { data }: AxiosResponse<Array<TodoType>> = await globalAxios.get(
      "todo"
    );
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      return err.code;
    }
  }
};

// TodoDetail取得API => 引数にidが必要
export const fetchTodoDetailApi = async (id: number) => {
  try {
    const { data }: AxiosResponse<TodoType> = await globalAxios.get(
      `todo/${id}`
    );
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      return err.code;
    }
  }
};
