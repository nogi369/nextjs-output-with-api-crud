/**
 * TodoTemplate
 *
 * @package components
 */
import { InputForm } from "../../atoms/InputForm";
import { BaseLayout } from "../../organisms/BaseLayout";
import { useTodoTemplate } from "./useTodoTemplate";
import { TodoList } from "../../organisms/TodoList";
import { useTodoContext } from "../../../contexts/TodoContext";
import styles from "./styles.module.css";

/**
 * TodoTemplate
 * @returns {JSX.Element}
 * @constructor
 */

export const TodoListTemplate = () => {
  const { originTodoList, deleteTodo } = useTodoContext();
  const [{ searchKeyword, showTodoList }, { handleChangeSearchKeyword }] =
    useTodoTemplate({ originTodoList });

  return (
    <BaseLayout title={"TodoList"}>
      <div className={styles.container}>
        <div className={styles.area}>
          <InputForm
            onChange={handleChangeSearchKeyword}
            value={searchKeyword}
            placeholder={"Search Keyword"}
          />
        </div>
        <div className={styles.area}>
          {showTodoList.length > 0 && (
            <TodoList todoList={showTodoList} handleDeleteTodo={deleteTodo} />
          )}
        </div>
      </div>
    </BaseLayout>
  );
};
