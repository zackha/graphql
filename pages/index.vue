<script setup>
const { data } = await useAsyncGql('getProduct', { 
  slug: 'patterned-wrap-skirt'
});
const product = data.value.product;
</script>

<template>
  <div>
    {{ product }}
  </div>
</template>
