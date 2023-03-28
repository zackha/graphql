<template>
  <div>
    {{ reviews }}
  </div>
</template>

<script setup>
defineProps({reviews: { type: Object, default: null }});
</script>