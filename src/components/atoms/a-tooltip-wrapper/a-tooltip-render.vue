<script lang="ts">
import {
    h,
    ref,
    reactive,
    Teleport,
    withDirectives,
    defineComponent
} from 'vue';

import ATooltipWrapper from './a-tooltip-wrapper.vue';

import useOutsideClick from './use/use-outside-click';

export default defineComponent({
    name: 'ATooltipRender',
    props: {
        /**
         * Content text
         */
        text: {
            type: String,
            default: ''
        }
    },
    setup(props, { slots }) {
        const refEl = ref();
        const isShow = ref(false);
        const position = reactive({
            left: '',
            top: ''
        });

        const { setClickOutsideListener } = useOutsideClick();

        function hiddenTooltip() {
            isShow.value = false;
        }

        function showTooltip() {
            const rec = refEl.value.getBoundingClientRect();
            position.left = (rec.x + rec.width / 2) + 'px';
            position.top = rec.y + rec.height + 'px';

            isShow.value = true;
            setClickOutsideListener([refEl], hiddenTooltip);
        }

        function updateEl(el: Node) {
            refEl.value = el;

            el.addEventListener('click', showTooltip);
        }

        function tooltipRender() {
            if (!isShow.value) {
                return null;
            }

            const localProps = {
                text: props.text,
                style: position
            };

            return h(Teleport, { to: 'body' }, h(ATooltipWrapper, localProps));
        }

        function defaultSlotRender() {
            let node = slots.default && slots.default()[0];

            if (node) {
                node = withDirectives(node, [[{
                    mounted: updateEl
                }]]);
            }

            return node;
        }

        return () => (
            [defaultSlotRender(), tooltipRender()]
        );
    }
});
</script>
