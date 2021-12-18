import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";

declare module '@vue/runtime-core'{
    interface State {
        tasks:{
            id: number,
            name: string,
            labelids:number[],
            done: boolean,
        },
        labels:{
            id:number,
            text: string,
        },
        nextTask_id:number,
        nextLabel:number,
    }

    interface ComponentCustomProperties{
        $store: Store<State>
    }
}