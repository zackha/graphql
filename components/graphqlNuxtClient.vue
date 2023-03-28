<template>
  <div>
    <div>Avarege: {{ reviews.averageRating }}</div>
    <br>
    <div v-for="review in reviews.edges" :key="review.id">
      <div>
        <div style="position: relative;display: flex;align-items: center;">
          <img style="width: 30px;border-radius: 999px" v-if="review.node.author.node.avatar" :src="review.node.author.node.avatar.url" />
          <span style="font-size: 18px;font-weight: 600;margin-left: 19px">{{ review.node.author.node.name }}</span>
          <span style="color: #FFC107;margin-left: 19px;font-size: 18px;font-weight: 600;">{{ review.rating }}</span>
          <span style="font-size: 18px;font-weight: 600;margin-left: 19px">{{ review.node.date }}</span>
        </div>
      </div>
      <div style="font-size: 20px;" v-html="review.node.content"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({reviews: { type: Object, default: null }});
</script>