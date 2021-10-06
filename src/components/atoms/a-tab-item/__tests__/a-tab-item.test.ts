import { nextTick } from 'vue';
import { shallowMount } from '@vue/test-utils';

import ATabItem from '../a-tab-item.vue';

const className = 'a-tab-item';
const selector = `.${className}`;

const requiredProps = {
    name: 'name',
    isActive: false
};
const defaultProps = {
    name: 'name',
    isActive: false
};
const mockedProps = {
    name: 'name',
    isActive: false
};
const classList = {
    active: 'tab-item--active'
};
const wrapper = (propsData: any) => shallowMount(ATabItem, { propsData });
let sut: any;

describe('ATabItem atom', () => {
    beforeEach(() => {
        sut = wrapper(requiredProps);
    });

    afterEach(() => {
        jest.resetModules();
        jest.clearAllMocks();
    });

    describe('component verification', () => {
        it('should be a Vue instance', () => {
            expect(sut.vm).toBeDefined();
        });

        it('should be the instance of AButton component', () => {
            expect(sut.findComponent(ATabItem).element).toBe(sut.element);
        });

        it('should have the appropriate component name', () => {
            expect(ATabItem.name).toBe('ATabItem');
        });

        it('should contain "a-tab-item" class', () => {
            const classesList = sut.find(selector).classes();

            expect(classesList).toContainEqual(className);
        });
    });

    describe('props and defaults verification', () => {
        it('should set default props values correctly', () => {
            expect(sut.vm.name).toEqual(defaultProps.name);
            expect(sut.vm.isActive).toEqual(defaultProps.isActive);
        });

        it('should set props values correctly', () => {
            sut = wrapper(mockedProps);

            expect(sut.vm.name).toEqual(mockedProps.name);
            expect(sut.vm.isActive).toEqual(mockedProps.isActive);
        });
    });

    describe('computed verification', () => {
        describe('activeClasses', () => {
            it('should include "active" class', async () => {
                sut.setProps({ isActive: true });
                await nextTick();
                expect(sut.vm.activeClass).toMatch(classList.active);
            });
        });
    });

    describe('methods verification', () => {
        describe('onClick', () => {
            it('should emit "clicked" event with proper native event payload', () => {
                sut.vm.onClickHandler(sut.vm.name);

                expect(sut.emitted().onClick[0][0]).toBe(sut.vm.name);
            });
        });
    });
});
