<template>
  <div v-if="desc" class="bg-white p-4 rounded text-black">
    <p class="text-sm break-all whitespace-pre-wrap">
      {{ desc }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    desc: String
  }
}
</script>