<template>
  <div class="flex flex-col gap-y-4">
    <card-item v-for="card in cards" :key="card.desc" :desc="card.desc"></card-item>
    <add-new-card :column-id="columnId"></add-new-card>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import CardItem from './CardItem.vue';
import AddNewCard from './AddNewCard.vue';
export default {
  props: {
    columnId: Number
  },
  components: {
    CardItem,
    AddNewCard
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