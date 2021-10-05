import { computed } from 'vue';
import { useStore as baseUseStore } from 'vuex';

import { storeKey } from '../store';
import { ACTION_TYPES } from '../store/modules/lists/action-types';

import { UserModel } from '../transformers/user-model';

function useStoreUsers() {
    const store = baseUseStore(storeKey);

    const userList = computed<Array<UserModel>>(() => store.getters['lists/users']);

    function fillUserList() {
        store.dispatch('lists/' + ACTION_TYPES.ASYNC_GET_USERS);
    }

    return {
        userList,
        fillUserList
    };
}

export default useStoreUsers;
