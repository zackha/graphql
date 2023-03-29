<template>
  <div>
    <GraphqlNuxtClient v-if="averageRating > 0" :reviews="reviews" />
  </div>
</template>

<script setup>
const reviews = ref(null)
const averageRating = ref(null)

const { product } = await GqlGetProduct({slug: 'patterned-wrap-skirt'})

onMounted(async () => {
  try {
    await product.value
    reviews.value = product?.reviews
    averageRating.value = product?.reviews?.averageRating
  } catch (err) {
    console.error(err)
  }
})
</script>
