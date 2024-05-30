import { Task } from "../app/page"
import prisma from "./db"

// add task
export const AddTask = async (task : Task) => {
    const newTask = await prisma.task.create({
        data: task
    })
    console.log(newTask)
    return newTask

}