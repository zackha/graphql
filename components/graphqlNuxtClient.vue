<template>
  <div class="reviews">
    <div class="comments">
      <div v-if="reviews.averageRating === 0">No comments yet</div>
      <div v-else>
        <div>Avarege: {{ reviews.averageRating }}</div>
        <br>
        <div v-for="review in reviews.edges" :key="review.id">
          <div class="content">
            <img v-if="review.node.author.node.avatar" :src="review.node.author.node.avatar.url" />
            <span>{{ review.node.author.node.name }}</span>
            <span>{{ review.node.date }}</span>
            <span class="rate">{{ review.rating }}</span>
          </div>
          <div class="review" v-html="review.node.content"></div>
        </div>
      </div>
    </div>
    <div class="review_form">
      <form @submit.prevent="addComment">
        <div>
          <label for="rating">Rating:</label>
          <select id="rating" v-model="newComment.rating" required>
            <option v-for="rating in 5" :key="rating" :value="rating">{{ rating }}</option>
          </select>
        </div>
        <br>
        <div>
          <label for="content">Comment:</label>
          <textarea id="content" v-model="newComment.content" required></textarea>
        </div>
        <br>
        <div>
          <label for="author">Your Email:</label>
          <input id="author" type="email" v-model="newComment.authorEmail" required>
        </div>
        <br>
        <button type="submit">Add Comment</button>
      </form>
    </div>
  </div>
</template>

<script setup>
defineProps({
  reviews: { 
    type: Object, 
    default: null 
  }
});

const newComment = ref({
  commentOn: 97,
  author: '',
  content: '',
  rating: 0,
  authorEmail: '',
});

const addComment = async () => {
  newComment.value.author = newComment.value.authorEmail.split('@')[0];
  await GqlWriteReview(newComment.value);
}

</script>

<style lang="postcss">
.reviews {
  display: flex;
  flex-wrap: wrap;
}
.comments {
  position: relative;
  order: 1;
  max-width: 49%;
  flex: 1 1 100%;
}
.content {
  position: relative;
  display: flex;
  align-items: center;
}
img {
  width: 30px;
  border-radius: 999px;
}
span {
  font-size: 16px;
  font-weight: 600;
  margin-left: 30px;
}
.rate {
  color: #f3c94d;
}
.review {
  font-size: 18px;
  color: #464646;
}

.review_form {
  order: 2;
  max-width: 49%;
  flex: 1 1 100%;
}
</style>