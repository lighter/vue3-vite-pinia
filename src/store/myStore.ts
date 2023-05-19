import {defineStore} from "pinia";

export const useMyStore = defineStore('myStore', {
    state: () => {
        return {
            count: 21
        }
    }
});