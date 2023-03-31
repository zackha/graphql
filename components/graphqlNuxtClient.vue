<template>
  <div class="reviews">
    <div class="comments">
      <table>
        <tr>
          <th colspan="5">Avarege: {{ reviews.averageRating }}</th>
        </tr>
        <tr>
          <th>Avatar</th>
          <th>Author</th>
          <th>Date</th>
          <th>Rate</th>
          <th>Review</th>
        </tr>
        <tr v-for="review in reviews.edges" :key="review.id">
          <td style="text-align: center"><img v-if="review.node.author.node.avatar" :src="review.node.author.node.avatar.url" /></td>
          <td>{{ review.node.author.node.name }}</td>
          <td>{{ review.node.date }}</td>
          <td style="text-align: center">{{ review.rating }}</td>
          <td v-html="review.node.content"></td>
        </tr>
      </table>
    </div>
    <div class="form">
      <form @submit.prevent="addComment">
        <div>
          <label for="rating">Rating:</label>
          <Icon 
            v-for="i in 5" 
            :key="i" 
            name="ion:star" 
            @click="setRating(i)"
            @mouseover="setHovered(i)"
            @mouseout="resetHovered"
            :size="size + ''" 
            :class="(rating < i && i > hovered) ? 'disable-star' : 'checked-star'"
          />
        </div>
        <br>
        <div>
          <label for="content">Comment:</label>
          <textarea id="content" v-model="content" required></textarea>
        </div>
        <br>
        <div>
          <label for="author">Your Email:</label>
          <input id="author" type="email" v-model="authorEmail" required>
        </div>
        <br>
        <button type="submit">Add Comment</button>
      </form>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  reviews: { type: Object, default: null },
  productId: { type: Number, default: null },
  size: { type: Number, default: 24 }
})

const hovered = ref(0);
const rating = ref(null)
const content = ref(null)
const authorEmail = ref(null)

function setRating(i) {
  rating.value = i;
}

function setHovered(i) {
  hovered.value = i;
}

function resetHovered() {
  hovered.value = 0;
}

async function addComment() {
  const variables = {
    commentOn: props.productId,
    author: authorEmail.value.split('@')[0],
    content: content.value,
    rating: rating.value,
    authorEmail: authorEmail.value
  }
  try {
    await GqlWriteReview(variables);
  } catch (error) {
    console.error(error)
  }
}
</script>

<style>
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
.form {
  position: relative;
  order: 2;
  max-width: 49%;
  flex: 1 1 100%;
}
img {
  width: 17px;
  height: 17px;
}
table {
  font-family: monospace;
  border-collapse: collapse;
  border: 1px dashed #333;
}
th {
  padding: 5px 7px;
}
td {
  padding: 0px 7px;
}
th {
  text-align: left;
  border-bottom: 1px dashed #333;
}
.disable-star {
  transition: 0.15s ease-in-out;
  color: #ccc;
}
.checked-star {
  transition: 0.15s ease-in-out;
  color: #F9BF3B;
	filter: drop-shadow(0 0 2px #F9BF3B);
}
</style>