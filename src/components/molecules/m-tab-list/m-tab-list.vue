<template>
    <div
        :at-m-tab-list="atAttribute"
        class="m-tab-list"
    >
        <div
            v-for="letter in list"
            :key="letter"
            class="tab-list__item"
        >
            <ATabItem
                :name="letter"
                :is-active="activeTab(letter)"
                @onClick="letterChange"
            />
        </div>
    </div>
</template>

<script lang="ts">
import type { PropType } from 'vue';

import { defineComponent } from 'vue';

import ATabItem from '../../atoms/a-tab-item';

export default defineComponent({
    name: 'MTabList',
    components: {
        ATabItem
    },
    props: {
        /**
         * Initial Value
         */
        modelValue: {
            type: String,
            required: true
        },
        /**
         * Array of
         */
        list: {
            type: Array as PropType<Array<string>>,
            default: () => []
        },
        /**
         * AQA attribute
         */
        atAttribute: {
            type: String,
            default: ''
        }
    },
    emits: {
        'update:modelValue': null
    },
    setup(props, { emit }) {
        function activeTab(latter: string) {
            return latter === props.modelValue;
        }

        function letterChange(latter: string) {
            emit('update:modelValue', latter);
        }

        return {
            activeTab,
            letterChange
        };
    }
});
</script>

<style lang="scss" src="./m-tab-list.scss" />
