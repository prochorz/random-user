<template>
    <div class="a-tooltip-wrapper">
        {{ text }}
    </div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue';

export default defineComponent({
    name: 'ATooltipWrapper',
    props: {
        /**
         * Content text
         */
        text: {
            type: String,
            default: ''
        }
    }
});
</script>

<style lang="scss" src="./a-tooltip-wrapper.scss" />
