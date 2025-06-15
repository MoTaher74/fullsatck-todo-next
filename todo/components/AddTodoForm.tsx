'use client';
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { defaultValues, todoFormSchema, TodoFormValues } from "@/schema";
import { createTodosAction } from "@/actions/todo.actions";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import Spinner from "./Spinner";
const AddTodoForm =()=>{

    const [loading,setLoading] = useState(false);
  const [open,setOpen]=useState(false);

 const defaultValues: Partial<TodoFormValues> = {
  title:"",
  body: "",
  complete:false
}
      const form = useForm<TodoFormValues>({
    resolver: zodResolver(todoFormSchema),
    defaultValues,
    mode: "onChange",
  });
  const onSubmit =async (data:TodoFormValues)=>{
    setLoading(true);
    // Here you would typically call an action to create a new todo
    await createTodosAction({title:data.title,body:data.body,complete:data.complete});
    setLoading(false);
    setOpen(false)
  }

return (

          <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
        <Button className="cursor-pointer flex items-center justify-center m-auto ">
        <Plus size={14}/>
        New Todo
      </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
             <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
    <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
               <FormDescription>
                You can <span>@mention</span> other users and organizations to
                link to them.
              </FormDescription>
            </FormItem>
          )}
        />

            <FormField
          control={form.control}
          name="complete"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} {...field} />
              </FormControl>
               <FormLabel>Completed</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        
                  <Button type="submit" className="cursor-pointer" disabled={loading}>{loading?(<><Spinner/>Saving</>):("save")}</Button>
        </form>
        </Form>
          </div>
          {/* <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="cursor-pointer">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="cursor-pointer">Save changes</Button>
          </DialogFooter> */}
        </DialogContent>
  
    </Dialog>

)
}

export default AddTodoForm ;