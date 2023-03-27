<template>
  <div>
    <GraphqlNuxtClient :reviews="product.reviews" />
  </div>
</template>

<script setup>
const { data } = await useAsyncGql('getProduct', { 
  slug: 'patterned-wrap-skirt'
});
const product = data.value.product;
</script>
