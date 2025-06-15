'use server';
import { TodoFormValues } from "@/schema";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

// fetch all todos(data from DB)
export const getUserTodosAction = async ({userId}:{userId:string|null}) => {
    return await prisma.todo.findMany({
        where:{
            user_id:userId as string 
        },
        orderBy:{
            createdAt:"desc"
        }
    });
   
};
{/**
 * Creates a new todo item in the database using the provided title and body.
 *
 * @param {TodoFormValues} params - The values for the new todo item.
 * @param {string} params.title - The title of the todo item.
 * @param {string} params.body - The body or description of the todo item.
 * @returns {Promise<Todo>} A promise that resolves to the newly created todo item.
 *
 * @example
 * const newTodo = await createTodosAction({ title: "Buy groceries", body: "Milk, Bread, Eggs" });
 *
 * @throws {Prisma.PrismaClientKnownRequestError} If the creation fails due to a database error.
 *
 * @remarks
 * This function uses Prisma's `todo.create` method to insert a new record into the database.
 * Ensure that the `prisma` client is properly initialized and that the `TodoFormValues` type
 * matches the expected input structure.
 */}
export const createTodosAction = async ({ title, body,complete }: TodoFormValues,userId:string) => {
    await prisma.todo.create({
        data:{
            title,
            body,
            completed: complete,
            user_id:userId as string
        }
    });
        revalidatePath('/');

};
export const updateTodosAction = async ({id,title,body,complete}:{id:string,title:string,body:string,complete:boolean}) => {
    await prisma.todo.update({
        where:{id},
        data:{
            title,
            body,
            completed: complete
        }
    });
    revalidatePath('/');
}
  
export const deleteTodosAction = async ({id}:{id:string}) => {
    await prisma.todo.delete({
        where:{
            id
        }
    })
    revalidatePath('/');
};