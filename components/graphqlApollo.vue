<template>
  <div>
    // Apollo {{ product }}
  </div>
</template>

<script setup>
import GET_PRODUCT from "~/gql/queries/getProduct.gql"

const { data } = await useAsyncQuery(GET_PRODUCT)
const product = data.value.product;
</script>