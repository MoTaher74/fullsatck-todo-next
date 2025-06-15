'use client';

import { Button } from "@/components/ui/button";
import  {Trash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ITodo } from "./TodoTable";

import { useState } from "react";
import { deleteTodosAction } from "@/actions/todo.actions";

const DeleteTodo = ({ todo }: { todo: ITodo }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
          <Button className="cursor-pointer" variant='destructive'><Trash size={16} /></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-red-700">Delete Todo</DialogTitle>
        </DialogHeader>
        <div className="">
         <p className="text-[18px] font-semibold">Are you sure you want to delete this item? This action cannot be undone</p>
          <div className="flex items-center mt-4 space-x-3">
           <Button className="cursor-pointer" variant='secondary' onClick={() => setOpen(false)}>Cancel</Button>
           <Button className="cursor-pointer" variant="destructive"  onClick={async () => await deleteTodosAction({ id: todo.id })}>Yes,Remove</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteTodo;
