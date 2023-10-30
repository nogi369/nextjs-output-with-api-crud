import { TodoType } from "@/interfaces/Todo";
import { AxiosResponse } from "axios";
import { globalAxios, isAxiosError } from "./config";

// TodoリストAPIを取得する
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
