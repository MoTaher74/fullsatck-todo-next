'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from '@/components/ui/badge';
import EditTodoForm from "./EditTodoForm";
import ShowDetailsTodo from "./ShowDetailsTodo";
import { cn } from "@/lib/utils";
import DeleteTodo from "./DeleteTodo";


export interface ITodo {
    id: string;
    title: string;
    body: string | null;
    completed: boolean;
    createdAt: Date;}

    const increment = (num: number) => {
  return num += 1;
};

const TodoTable =({todos}:{todos:ITodo[]})=>{

return (
<div className="w-full px-2">
 {/* Table for desktop */}
  <div className="hidden md:block">
    <Table className="mt-10">
      <TableCaption>A list of your recent todos.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">ID</TableHead>
          <TableHead>TITLE</TableHead>
          <TableHead>COMPLETED</TableHead>
          <TableHead className="">ACTIONS</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo.id} >
            <TableCell className="font-medium">{increment(todos.indexOf(todo))}</TableCell>
            <TableCell>{todo.title}</TableCell>
            <TableCell>{todo.completed ? <Badge className="bg-blue-400">Completed</Badge> :<Badge variant="secondary" className="bg-yellow-400">Uncompleted</Badge>}</TableCell>
            <TableCell className="space-x-2">
                <ShowDetailsTodo todo={todo}/>
                <EditTodoForm todo={todo} />
                <DeleteTodo todo={todo}/>
                {/* <Button className="cursor-pointer" variant='destructive' onClick={async()=> await deleteTodosAction({id:todo.id})}><Trash size={16} /></Button> */}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Todos</TableCell>
          <TableCell className="text-right">{todos.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
    </div>
    {/* Card style for mobile */}
    <div className="block md:hidden space-y-4 mt-6">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="rounded-xl border p-4 shadow-sm space-y-2 bg-white"
          >
            <p className="text-sm font-medium text-gray-500">#{increment(todos.indexOf(todo))}</p>
            <h3 className="text-lg font-semibold">{todo.title}</h3>
            <p className="text-sm text-gray-600">{todo.body}</p>
           <div className="flex items-center justify-between">
             <Badge className={cn(todo.completed ? "bg-blue-400" : "bg-yellow-400")}>
              {todo.completed ? "Completed" : "Uncompleted"}
            </Badge>
            <div className="space-x-2">
              <ShowDetailsTodo todo={todo} />
              <EditTodoForm todo={todo} />
             <DeleteTodo todo={todo}/>
            </div>
           </div>
          </div>
        ))}
      </div>
</div>
);
}


export default TodoTable ;