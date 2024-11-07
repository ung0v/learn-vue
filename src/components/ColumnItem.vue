<template>
  <div class="ml-4 p-4 bg-[#DDDFE7] max-w-[240px] min-w-[240px] min-h-[440px] rounded">
    <div class="flex flex-col gap-y-3">
      <form @submit.prevent="editColumn" v-if="isEdit" class="flex gap-x-2 items-center">
        <input v-model.lazy.trim="label"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
        <button type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1">Done</button>
      </form>
      <h3 v-else @click="toggleEdit"
        class="title text-base text-black uppercase font-semibold hover:bg-gray-300 transition-all cursor-pointer">{{
          column.label
        }}</h3>
      <card-list :column-id="column.id"></card-list>
    </div>
  </div>
</template>

<script>
import CardList from './CardList.vue';

export default {
  props: {
    column: Object
  },
  components: {
    CardList
  },
  data() {
    return {
      isEdit: false,
      label: this.$props.column.label
    }
  },
  methods: {
    toggleEdit() {
      this.isEdit = !this.isEdit
    },
    editColumn() {
      this.toggleEdit();
      this.$store.commit('editColumn', { id: this.$props.column.id, label: this.label })
    }
  },
}
</script>