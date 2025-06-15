
'use server';
import { getTodosAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";

import TodoTable from "@/components/TodoTable";





export default async function Home() {
const todos = await getTodosAction();
  return (
    <div className="container mx-auto ">
      <AddTodoForm/>
      <TodoTable todos={todos}/>
     
      {/* {todos.map((todo) => (<li key={todo.id} className="border p-4 my-2 rounded-md">{todo.title}</li>))} */}
    </div>
  );
}
