'use server';
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
import { Pen, Trash } from "lucide-react";
import { getTodosAction } from "@/actions/todo.actions";


const TodoTable =async ()=>{
    const todos = await getTodosAction();
return (
    <Table className="mt-10">
      <TableCaption>A list of your recent invoices.</TableCaption>
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
          <TableRow key={todo.id}>
            <TableCell className="font-medium">{todo.id}</TableCell>
            <TableCell>{todo.title}</TableCell>
            <TableCell>false</TableCell>
            <TableCell className="space-x-2">
                <Button className="cursor-pointer"><Pen size={16}/></Button>
                <Button className="cursor-pointer" variant='destructive'><Trash size={16} /></Button>
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