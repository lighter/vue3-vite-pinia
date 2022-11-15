import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AddTodo from "@/components/AddTodo/AddTodo.vue";
import ListTodo from "@/components/ListTodo/ListTodo.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/list",
        name: "ListTodo",
        component: ListTodo
    },
    {
        path: "/add",
        name: "AddTodo",
        component: AddTodo
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
