<template>
    <div
        :at-a-user-row="atAttribute"
        class="a-user-row"
    >
        <div class="user-row__avatar">
            <img :src="picture" />
        </div>
        <div>
            {{ name }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AUserRow',
    components: {

    },
    props: {
        /**
         * User name
         */
        name: {
            type: String,
            required: true
        },
        /**
         * Url to Img
         */
        picture: {
            type: String,
            default: ''
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

    },
    setup() {

    }
});
</script>

<style lang="scss" src="./a-user-row.scss" />
