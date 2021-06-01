import Vue from 'vue';
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import BasicTableTest from "@/components/testing/BasicTableTest.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe("HelloWorld.vue", () => {
  it("should run this dummy text", () => {
    expect('Dummy' + ' Test!').toEqual('Dummy Test!');
  });
});

describe('BasicTableTest.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(BasicTableTest);
    const vm = new Constructor().$mount();

    expect(
      vm.$el.querySelector('.ui.selectable thead tr th').textContent
    ).toContain('Items');
    expect(
      vm.$el.querySelector('.ui.button').textContent
    ).toContain('Add');
    expect(
      vm.$el.querySelector('.ui.label').textContent
    ).toContain('Remove all');
  });

  it('should set correct default data', () => {
    const initialData = BasicTableTest.data();

    expect(initialData.item).toEqual('');
    expect(initialData.items).toEqual([]);
  });
});