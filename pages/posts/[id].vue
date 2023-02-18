<script setup lang="ts">
// import { getUsers } from '~/server/api/users'
import { apiGetPost, apiGetComments } from '~/server/api';

const post = ref<any>(null);
const comments = ref<any[]>([]);
const route = useRoute()

async function fetchPost() {
  try {
    const data = await apiGetPost(Number(route.params.id));
    post.value = data;
  } catch (error) {
    console.error(error);
  }
};
fetchPost();

async function fetchComments() {
  try {
    const data = await apiGetComments(Number(route.params.id));
    comments.value = data;
  } catch (error) {
    console.error(error);
  }
};
fetchComments();


</script>

<template>
  <div>
    <h3><NuxtLink :to="`/users/${post?.userId}`">Go to Author Page</NuxtLink></h3>
    <h3><NuxtLink v-if="route.params.id != '1'" :to="`/posts/${Number(route.params.id) - 1}`">Prev</NuxtLink></h3>
    <h3><NuxtLink v-if="route.params.id != '100'" :to="`/posts/${Number(route.params.id) + 1}`">Next</NuxtLink></h3>
    <h3>No. {{ post?.id }}</h3>
    <h4>Author: {{ post?.userId }}</h4>
    <h1>{{ post?.title }}</h1>
    <p>{{ post?.body }}</p>
    <br />
    <ul aria-label="Comment:">
      <li v-for="comment in comments" :key="comment.id">
        <h3>{{ comment.name }} ({{ comment.email }})</h3>
        <p>> {{ comment.body }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul:before{
    content: attr(aria-label);
    display: inline-block;
    margin-left: -40px;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 115%;
}
li {
    margin-bottom: 10px;
}
</style>