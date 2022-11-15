import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';

export interface Task {
    id: string;
    description: string;
    done: boolean;
    createdAt: Date;
    updatedAt?: Date;
}

export function createTask(): Task {
    return {
        id: uuidv4(),
        description: faker.lorem.sentence(),
        done: false,
        createdAt: new Date(),
    };
}
