import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";

declare module '@vue/runtime-core'{
    interface State {
        tasks:{
            id: number,
            name: string,
            done: boolean,
        };
    }

    interface ComponentCustomProperties{
        $store: Store<State>
    }
}