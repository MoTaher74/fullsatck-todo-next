'use client';

import { Button } from "@/components/ui/button";
import { NotebookText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ITodo } from "./TodoTable";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const ShowDetailsTodo = ({ todo }: { todo: ITodo }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="cursor-pointer">
          <NotebookText size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Todo Details</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            <p className="text-sm font-semibold">Title:</p>
            <p className="text-[18px]">{todo.title}</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Description:</p>
            <p className="text-[18px]">{todo.body || "No description provided."}</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Completed:</p>
            <Badge className={todo.completed ? "bg-blue-400" : "bg-yellow-400"}>
              {todo.completed ? "Completed" : "Uncompleted"}
            </Badge>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShowDetailsTodo;
