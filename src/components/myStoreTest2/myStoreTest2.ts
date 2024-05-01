import { ref, defineComponent, watch} from "vue";
import { useMyStore } from "@/store/myStore";

export default defineComponent({
    props: {
        message: String
    },
    setup(props) {
        const store = useMyStore();
        const count = ref(store.count);

        watch(
            () => store.count,
            (newCount) => {
              count.value = newCount;
            }
        );
        return { count };
    }
})