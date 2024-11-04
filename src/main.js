// import './assets/main.css'
// import './assets/style.css'

let PlanComponent = {
    template: '#plan-template',
    props: {
        name: { type: String, default: 'The Verge', required: true },
        selected: {type: Boolean, default: false}
    },
    // methods: {
    //     select() {
    //         this.$emit("select", this.name)
    //     }
    // }
}

let PlanPickerComponent = {
    components: { plan: PlanComponent },
    template: '#plan-picker-template',
    data() {
        return {
            plans: ["The Single", "The Curious", "The Addict"],
            selectedPlan: null
        }
    },
    methods: {
        selectPlan(plan) {
            console.log(plan)
            this.selectedPlan = plan
        }
    }
}


Vue.createApp({
    components: {
        'plan-picker': PlanPickerComponent
    }
})
    .mount('#app')
