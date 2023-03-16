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
    },
    {
        path: "/slot",
        name: "Slot",
        component: () => import("@/components/SlotSample/Slot1.vue")
    },
    {
        path: "/scoped-slot",
        name: "ScopedSlot",
        component: () => import("@/components/SlotSample2/ScopedSlot1.vue")
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
