import {Task} from "@/models/task.models";
import {defineStore} from "pinia";

export type RootState = {
    tasks: Task[];
};

export const useMainStore = defineStore('mainStore', {
    state: () => {
        return { "tasks": [] } as RootState;
    },
    actions: {
        createNewTask(task: Task) {
            if (!task) return;
            this.tasks.push(task);
        },
        doneTask(id: string) {
            if (!id) return;
            const index = this.tasks.findIndex(item => item.id === id);
            if (index === -1) return;
            this.tasks[index].done = true;
            this.tasks[index].updatedAt = new Date();
        },
        deleteTask(id: string) {
            if (!id) return;
            const index = this.tasks.findIndex(item => item.id === id);
            if (index === -1) return;
            this.tasks.splice(index, 1);
        }
    },
    persist: true
});
