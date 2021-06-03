import Vue from 'vue';
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import BasicTableTest from "@/components/testing/BasicTableTest.vue";


describe('BasicTableTest.vue', () => {

    let wrapper;

    beforeEach(() => {
      wrapper = shallowMount(BasicTableTest);
    });

    describe('the user populates the text input field', () => {
        let inputField;
        // preset  input string value to 'New Item' and trigger
        // the input event.
        beforeEach(() => {
          inputField = wrapper.find('input');
          inputField.element.value = 'New Item';
          inputField.trigger('input');
        });

        // verify the vm data property for item set to 'New Item'
        it('should update the "text" data property', () => {
          expect(wrapper.vm.item).toEqual('New Item');
        });

        // verify when a user starts to enter text input, the
        // add button is active -- i.e button.disabled is false.
        it('should enable the "Add" button when text input is populated', () => {
          const addItemButton = wrapper.find('.ui.button');

          expect(addItemButton.element.disabled).toBe.false;
        });

        describe('and then clears the input', () => {
            it('should disable the "Add" button', () => {
              const addItemButton = wrapper.find('.ui.button');

              inputField.element.value = '';
              inputField.trigger('input');

              expect(addItemButton.element.disabled).toBe.true;
            });
          });
      });
  });