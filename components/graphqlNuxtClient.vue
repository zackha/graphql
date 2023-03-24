<template>
  <div>
    // Nuxt Graphq Client {{ product }}
  </div>
</template>

<script setup>
const { data } = await useAsyncGql('getProduct', { 
  slug: 'patterned-wrap-skirt'
});
const product = data.value.product;
</script>