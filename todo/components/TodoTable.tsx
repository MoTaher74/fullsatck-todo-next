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
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import { Badge } from '@/components/ui/badge';
import { deleteTodosAction } from "@/actions/todo.actions";
import EditTodoForm from "./EditTodoForm";


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
                <EditTodoForm todo={todo} />
                <Button className="cursor-pointer" variant='destructive' onClick={async()=> await deleteTodosAction({id:todo.id})}><Trash size={16} /></Button>
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


)
}

export default TodoTable ;