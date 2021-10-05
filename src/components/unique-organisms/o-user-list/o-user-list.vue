<template>
    <div class="o-user-list">
        <MTabList
            v-model="currentTab"
            :list="tabs"
            class="user-list__tab"
        />

        <div class="user-list__content">
            <template v-if="isUsersExist">
                <MUserList :users="filteredUsers" />
            </template>
            <div v-else>
                Letter "{{ currentTab }}" is empty...
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {
    ref,
    computed,
    defineComponent
} from 'vue';

import MTabList from '../../molecules/m-tab-list';
import MUserList from '../../molecules/m-user-list';

import useStoreUsers from '../../../use/use-store-users';
import configuration from '../../../../configuration.json';

export default defineComponent({
    name: 'OUserList',
    components: {
        MTabList,
        MUserList
    },
    setup() {
        const { userList } = useStoreUsers();
        const currentTab = ref(configuration.tabs[0]);

        const filteredUsers = computed(() => {
            const firstLetter = currentTab.value.toLowerCase();
            return userList.value.filter(item => {
                return item.lastName.toLowerCase().startsWith(firstLetter);
            }).sort((a, b) => a.lastName > b.lastName ? 1 : -1);
        });

        const isUsersExist = computed(() => Boolean(filteredUsers.value.length));

        return {
            isUsersExist,
            currentTab,
            filteredUsers,
            tabs: configuration.tabs
        };
    }
});
</script>

<style lang="scss" src="./o-user-list.scss" />
