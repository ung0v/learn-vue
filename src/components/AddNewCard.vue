<template>
  <form @submit.prevent="addNewCard" class="flex gap-2" :class="{ 'flex-col': isEdit }">
    <button type="button" v-if="!isEdit" @click="toggleEdit"
      class="flex-1 text-gray-900 bg-transparent border focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">+
      Add new task</button>

    <textarea v-else v-model="newCard" autofocus @keyup.ctrl.enter="addNewCard"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      placeholder=""></textarea>

    <div v-if="isEdit" class="flex">
      <button type="button" @click="cancelEdit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">X</button>
      <button type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Done</button>
    </div>

  </form>
</template>

<script>
export default {
  props: {
    columnId: Number
  },
  setup(props) {
    return {
      columnId: props.columnId
    }
  },
  data() {
    return {
      isEdit: false,
      newCard: ""
    }
  },
  methods: {
    toggleEdit() {
      this.isEdit = !this.isEdit
    },
    cancelEdit() {
      this.toggleEdit()
      this.newCard = ""
    },
    addNewCard() {
      if (this.newCard) {
        this.$store.commit('addCard', { columnId: this.columnId, desc: this.newCard })
      }
      this.cancelEdit()
    }
  },
}
</script>