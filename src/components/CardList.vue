<template>
  <draggable tag="child" class="flex flex-col gap-y-4" :list="cards" group="people" item-key="desc">
    <template #item="{ element }">
      <card-item :desc="element.desc"></card-item>
    </template>
  </draggable>
  <add-new-card :column-id="columnId" class="mt-4"></add-new-card>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import CardItem from './CardItem.vue';
import AddNewCard from './AddNewCard.vue';
import draggable from 'vuedraggable';
export default {
  props: {
    columnId: Number
  },
  components: {
    CardItem,
    AddNewCard,
    draggable
  },
  setup(props) {
    const store = useStore();
    const columns = computed(() => store.state.columns).value;

    return {
      columnId: props.columnId,
      cards: columns.find(c => c.id === props.columnId).childrens
    }
  }
}
</script>