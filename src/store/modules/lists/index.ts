/* eslint-disable no-param-reassign */
import {
    Module,
    GetterTree,
    ActionTree,
    MutationTree,
    ActionContext
} from 'vuex';

import { getUsers } from '../../../api/user';
import { ACTION_TYPES } from './action-types';
import { MUTATION_TYPES } from './mutation-types';

const initState = {
    users: []
};

type State = typeof initState;

const mutations: MutationTree<State> = {
    [MUTATION_TYPES.USERS_FILL](state, payload) {
        state.users = payload;
    }
};

const getters: GetterTree<State, State> = {
    users: state => state.users
};

const actions: ActionTree<State, any> = {
    async [ACTION_TYPES.ASYNC_GET_USERS]({ commit }: ActionContext<State, State>) {
        let response;
        try {
            response = await getUsers();
            commit(MUTATION_TYPES.USERS_FILL, response);
        } catch (error) {
            console.error(error);
        }

        return response || [];
    }
};

const lists: Module<State, any> = {
    namespaced: true,
    state: () => initState,
    actions,
    mutations,
    getters
};

export default lists;
