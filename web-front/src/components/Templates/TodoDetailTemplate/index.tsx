import { InputForm } from "../../atoms/InputForm";
import { TextArea } from "../../atoms/TextArea";
import { BaseLayout } from "../../organisms/BaseLayout";
import { useTodoContext } from "../../../contexts/TodoContext";
import styles from "./styles.module.css";
import { FC } from "react";
import { useTodoDetailTemplate } from "./useTodoDetailTemplate";

export const TodoDetailTemplate: FC = () => {
  const [{ todo }] = useTodoDetailTemplate();

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
