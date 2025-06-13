'use server';
import { TodoFormValues } from "@/schema";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// fetch all todos(data from DB)
export const getTodosAction = async () => {
    return await prisma.todo.findMany();
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
export const createTodosAction = async ({ title, body }: TodoFormValues) => {
    await prisma.todo.create({
        data:{
            title,
            body
        }
    });

};
export const updateTodosAction = async () => {};
export const deleteTodosAction = async () => {};