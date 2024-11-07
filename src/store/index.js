import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
  state() {
    return {
      columns: [
        {
          id: 1,
          label: 'To Do',
          childrens: [
            {
              desc: "Research and outline project requirements for initial phase."
            },
            {
              desc: "Prepare documentation for the user authentication module."
            },
            {
              desc: "Set up initial database schema and relationships."
            }
          ]
        },
        {
          id: 2,
          label: 'In Progress',
          childrens: [
            {
              desc: "Develop the frontend UI components for the dashboard."
            },
            {
              desc: "Integrate third-party API for payment processing."
            }
          ]
        },
        {
          id: 3,
          label: 'Review',
          childrens: [
            {
              desc: "Code review for user registration and login flows."
            },
            {
              desc: "Review database migrations and data seeding scripts."
            }
          ]
        },
        {
          id: 4,
          label: 'Done',
          childrens: [
            {
              desc: "Completed project setup and initial configurations."
            },
            {
              desc: "Installed necessary dependencies and libraries."
            },
            {
              desc: "Tested initial project setup on local environment."
            }
          ]
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
