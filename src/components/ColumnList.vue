<template>

  <draggable class="flex" :list="columns" group="people" item-key="id" handle=".title">
    <template #item="{ element }">
      <column-item :column="element"></column-item>
    </template>
  </draggable>
  <add-new-column></add-new-column>
</template>

<script>
import AddNewColumn from './AddNewColumn.vue';
import ColumnItem from './ColumnItem.vue';
import draggable from "vuedraggable";

export default {
  components: {
    ColumnItem,
    AddNewColumn,
    draggable
  },
  computed: {
    columns() {
      return this.$store.state.columns;
    },
  },
}
</script>