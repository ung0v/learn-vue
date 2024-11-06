<template>

  <column-item :column="column" v-for="column in columns" :key="column.id"></column-item>
  <add-new-column></add-new-column>
</template>

<script>
import AddNewColumn from './AddNewColumn.vue';
import ColumnItem from './ColumnItem.vue';

export default {
  components: {
    ColumnItem,
    AddNewColumn
  },
  computed: {
    columns() {
      return this.$store.state.columns;
    },
  },
}
</script>