<template>
    <div
        :at-a-tab-item="atAttribute"
        class="a-tab-item"
        :class="activeClass"
        @click="onClickHandler"
    >
        <div class="tab-item__wrapper">
            {{ name }}
        </div>
    </div>
</template>

<script lang="ts">
import {
    computed,
    defineComponent
} from 'vue';

export default defineComponent({
    name: 'ATabItem',
    props: {
        /**
         * title of tab
         */
        name: {
            type: String,
            required: true
        },
        /**
         * status of tab
         */
        isActive: {
            type: Boolean,
            default: false
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
        onClick: null
    },
    setup(props, { emit }) {
        const activeClass = computed(() => props.isActive && 'tab-item--active');

        function onClickHandler() {
            emit('onClick', props.name);
        }

        return {
            activeClass,
            onClickHandler
        };
    }
});
</script>

<style lang="scss" src="./a-tab-item.scss" />
