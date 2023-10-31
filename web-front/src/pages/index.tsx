import { TodoListTemplate } from "@/components/Templates/TodoListTemplate";
import { NextPage } from "next";

const TodoListPage: NextPage = () => <TodoListTemplate />;

export default TodoListPage;

// http://localhost:3001/
// http://localhost:3001/todo/create
// http://localhost:3001/todo/detail/1
// http://localhost:3001/todo/edit/1
