<template>
  <div class="container" style="background-color: lightBlue;">
    <p>This is a child component.</p>
    <div>
      <p>Default Slot</p>
      <slot v-bind:text="defaultSlotText"></slot>
    </div>
    <div>
      <p>Named Slot</p>
      <slot name="namedSlot" v-bind:text="namedSlotText"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultSlotText: "My original scope is from Child. Default Slot Text",
      namedSlotText: "My original scope is from Child. Named Slot Text"
    }
  }
}
</script>