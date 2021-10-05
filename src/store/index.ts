import {
    createStore,
    createLogger,
    useStore as baseUseStore
} from 'vuex';

import lists from './modules/lists';

const isDebug = import.meta.env.MODE === 'development';
const plugins = isDebug ? [createLogger()] : [];

const store = createStore<State>({
    strict: isDebug,
    modules: {
        lists
    },
    plugins
});

type State = Record<string, any>

const storeKey = 'store';

function useStore () {
    return baseUseStore(storeKey);
}

export {
    store,
    storeKey,
    useStore
};
