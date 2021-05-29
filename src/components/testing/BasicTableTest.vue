<template>
    <div>
        <p>Table Component</p>
  <div id="table" class="ui text container">
    <div class="ui text container">
      <table class="ui selectable structured large table">
        <thead>
          <tr>
            <th>Items</th>
          </tr>
        </thead>
        <tbody class="item-list">
          <tr v-for="(item, index) in items" :key="index" >
            <td>{{ item }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>
              <form class="ui form" @submit="addItem">
                <div class="field">
                  <input v-model="item"
                    type="text"
                    class="prompt"
                    placeholder="Add item..." value="" />
                </div>
                <button type="submit"
                  class="ui button" :disabled="!item">Add</button>
                <button @click="removeAllItems"
                  class="ui button ml-3">Remove all</button>
              </form>
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
  </div>
</template>

<script>
    export default {
        name: 'basicTableTest',
        data() {
        return {
        item: '',
        items: []
        };
    },
    methods: {
        addItem(evt) {
        evt.preventDefault();
        this.items.push(this.item);
        this.item = '';
        },
        removeAllItems() {
        this.items = [];
        }
    }

    }
</script>

<style scoped>
#table {
  margin-top: 60px;
}

#table .ui.label {
  float: right;
  cursor: pointer;
}
</style>