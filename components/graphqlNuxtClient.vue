<template>
  <div>
    // Nuxt Graphq Client {{ product }}
  </div>
</template>

<script setup>
const { data } = await useAsyncGql('getProduct')

const product = data.value.product;
</script>