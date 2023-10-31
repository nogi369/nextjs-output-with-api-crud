import { InputForm } from "../../atoms/InputForm";
import { TextArea } from "../../atoms/TextArea";
import { BaseLayout } from "../../organisms/BaseLayout";
import { useTodoContext } from "../../../Contexts/TodoContext";
import styles from "./styles.module.css";
import { useRouter } from "next/router";

export const TodoDetailTemplate = () => {
  const router = useRouter();
  // グローバルstate取得
  const { originTodoList } = useTodoContext();
  // Todo定義
  const todo = originTodoList.find(
    (todo) => String(todo.id) === router?.query?.id
  );

  // disabled : https://www.delftstack.com/ja/howto/react/disable-button-in-react/
  return (
    <BaseLayout title={"TodoDetail"}>
      {!!todo && (
        <div className={styles.container}>
          <div className={styles.area}>
            <InputForm disabled value={todo.title} placeholder={"Title"} />
          </div>
          <div className={styles.area}>
            <TextArea disabled value={todo.content} placeholder={"Content"} />
          </div>
        </div>
      )}
    </BaseLayout>
  );
};
