    'use client';
    import { Button } from "@/components/ui/button";
    import { Pen} from "lucide-react";
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
    import {  todoFormSchema, TodoFormValues } from "@/schema";
    import { Checkbox } from "@/components/ui/checkbox";
    import { useState } from "react";
    import Spinner from "./Spinner";
    import { ITodo } from "./TodoTable";
import { updateTodosAction } from "@/actions/todo.actions";
    const EditTodoForm =({todo}:{todo:ITodo})=>{

        const [loading,setLoading] = useState(false);
    const [open,setOpen]=useState(false);

    const defaultValues: Partial<TodoFormValues> = {
    title: todo.title,
    body: todo.body as string,
    complete: todo.completed
}
        const form = useForm<TodoFormValues>({
        resolver: zodResolver(todoFormSchema),
        defaultValues,
        mode: "onChange",
    });
    const onSubmit =async (data:TodoFormValues)=>{
        setLoading(true);
        // Here you would typically call an action to create a new todo
        // await createTodosAction({title:data.title,body:data.body,complete:data.complete});
        await updateTodosAction({id:todo.id,title:data.title,body:data.body as string,complete:data.complete});
        setLoading(false);
        setOpen(false)
    }

    return (

            <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
            <Button className="cursor-pointer ">
            <Pen size={14}/>
        </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Edit Todo</DialogTitle>
                <DialogDescription>
                Edit your todo details below.
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
                    <Checkbox checked={field.value} onCheckedChange={field.onChange}/>
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
            </DialogContent>
    
        </Dialog>

    )
    }

    export default EditTodoForm ;