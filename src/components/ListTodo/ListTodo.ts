import { defineComponent } from "vue";
import { useMainStore } from "@/store";
import { storeToRefs } from "pinia";

export default defineComponent({
    setup() {
        const store = useMainStore();
        const { tasks } = storeToRefs(store);
        const { doneTask, deleteTask } = store;
        return { tasks, doneTask, deleteTask };
    }
})
