<template>
    <OUserList />
</template>

<script setup lang="ts">
/* eslint-disable-next-line */
import OUserList from './components/unique-organisms/o-user-list';
import useStoreUsers from './use/use-store-users';

const { fillUserList } = useStoreUsers();

fillUserList();
</script>
