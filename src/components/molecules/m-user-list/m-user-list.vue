<template>
    <div class="m-user-list">
        <template
            v-for="user in users"
            :key="user.id"
        >
            <ATooltipWrapper :text="user.email">
                <AUserRow
                    :name="user.fullName"
                    :picture="user.avatar"
                />
            </ATooltipWrapper>
        </template>
    </div>
</template>

<script lang="ts">
import type { PropType } from 'vue';

import { defineComponent } from 'vue';

import AUserRow from '../../atoms/a-user-row';
import ATooltipWrapper from '../../atoms/a-tooltip-wrapper';

import { UserModel } from '../../../transformers/user-model';

export default defineComponent({
    name: 'MUserList',
    components: {
        AUserRow,
        ATooltipWrapper
    },
    props: {
        /**
         * List with users
         */
        users: {
            type: Array as PropType<Array<UserModel>>,
            default: () => []
        }
    }
});
</script>

<style lang="scss" src="./m-user-list.scss" />
