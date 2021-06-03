import Vue from 'vue';
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import BasicTableTest from "@/components/testing/BasicTableTest.vue";


describe('BasicTableTest.vue', () => {
    // Mount component in isolation via shallowMount
    let wrapper;

    // best practice to re-render the component before each spec
    // because the component's modified state could leak from one
    // spec to the next and break tests. beforeEach here ensures
    // a fresh state.
    beforeEach(() => {
      wrapper = shallowMount(BasicTableTest);
    });

    // wrapperr.html() to access a components HTML
    it('should render correct contents', () => {
      expect(wrapper.html()).toContain('<th>Items</th>');
      expect(wrapper.html()).toContain(
        '<input type="text" placeholder="Add item..." value="" class="prompt">'
      );
      expect(wrapper.html()).toContain(
        '<button type="submit" disabled="disabled" class="ui button">Add</button>'
      );
      expect(wrapper.html()).toContain(
        // NOTE. toContain verifies RENDERED html element state. the following will fail.
        // '<button @click="removeAllItems" class="ui button ml-3">Remove all</button>'
        '<button class="ui button ml-3">Remove all</button>'
      );
    });

    //wrapper.vm to access the Vue instance.
    it('should set correct default data', () => {
      expect(wrapper.vm.item).toEqual('');
      expect(wrapper.vm.items).toEqual([]);
    });

    // wrapper.find() method to to return a wrapper for selected HTML elements
    // here we find the element by dot notated class name
    // ... then can verify it's attribute value for 'disabled'
    it('should have the "Add" button disabled', () => {
      const addItemButton = wrapper.find('.ui.button');

      expect(addItemButton.element.disabled).toBe.true;
    });
  });