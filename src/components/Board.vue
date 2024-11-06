<template>
    <div class="pt-20 pb-6 px-8">
        <h1 class="text-3xl mb-6">Vue Trello Clone</h1>
        <div class="overflow-auto min-h-[80vh] max-h-[80vh] -mx-8 px-8">
            <div class="flex gap-x-4">
                <column-list></column-list>
            </div>
        </div>
    </div>
</template>

<script>
import ColumnList from './ColumnList.vue';

export default {
    components: {
        ColumnList
    },
    setup() {

    }
}
</script>