
'use server';
import { getUserTodosAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";

import TodoTable from "@/components/TodoTable";
import  {auth}  from "@clerk/nextjs/server";





export default async function Home() {

  const {userId}  = await auth();
const todos = await getUserTodosAction({ userId });

  return (
    <div className="container mx-auto ">
      <AddTodoForm userId={userId}/>
      <TodoTable todos={todos}/>
     
      {/* {todos.map((todo) => (<li key={todo.id} className="border p-4 my-2 rounded-md">{todo.title}</li>))} */}
    </div>
  );
}
