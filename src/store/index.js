import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
  state() {
    return {
      columns: [
        {
          id: 1,
          label: 'To Do',
          childrens: [{
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra venenatis accumsan."
          }]
        },
        {
          id: 2,
          label: 'In Progress',
          childrens: [{
            desc: ""
          }]
        },
        {
          id: 3,
          label: 'Done',
          childrens: []
        }
      ]
    }
  },
  mutations: {
    addColumn(state, { label }) {
      const newColumn = { id: state.columns.length + 1, label, childrens: [] };
      state.columns.push(newColumn);
    },
    editColumn(state, { id, label }) {
      const index = state.columns.findIndex(c => c.id === id);
      if (index >= 0) {
        state.columns[index].label = label
      }
    },
    addCard(state, { columnId, desc }) {
      console.log(columnId, desc);
      const index = state.columns.findIndex(c => c.id === columnId);
      if (index >= 0) {
        state.columns[index].childrens.push({ desc });
      }
    },
  }
})
