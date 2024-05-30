import { tasks} from './products';
import{ PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    


    for (const task of tasks) {
        await prisma.task.create({
            data: task
        })
    }
