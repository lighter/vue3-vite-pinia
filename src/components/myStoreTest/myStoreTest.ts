import { ref, defineComponent, watch} from "vue";
import { useMyStore } from "@/store/myStore";
import myStoreTest2 from "../myStoreTest2/myStoreTest2.vue";

export default defineComponent({
    components: {
        myStoreTest2
    },
    setup() {
        const store = useMyStore()
        const count = ref(store.count)
        const testMessage = ref('')
        const increment = () => {
            store.count++;
            testMessage.value = 'count is ' + store.count;
        };

        watch(
            () => store.count, 
            (newCount) => {
            count.value = newCount;
        });

        return { count, testMessage, increment };
    }
})