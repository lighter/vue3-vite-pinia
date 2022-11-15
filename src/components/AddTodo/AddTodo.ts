import { ref, defineComponent} from "vue";
import { useMainStore } from "@/store";
import { v4 as uuidv4 } from 'uuid';

export default defineComponent({
    setup() {
        const task = ref('');
        const store = useMainStore();

        const addTask = () => {
            if (!task.value) return;
            store.createNewTask({
                id: uuidv4(),
                description: task.value,
                done: false,
                createdAt: new Date(),
                updatedAt: new Date()
            });
            task.value = '';
        };

        return { task, addTask };
    }
})
