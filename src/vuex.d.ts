import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";

declare module '@vue/runtime-core'{
    interface State {
        tasks:{
            id: number,
            name: string,
            done: boolean,
        },
        nextTask_id:number,
    }

    interface ComponentCustomProperties{
        $store: Store<State>
    }
}