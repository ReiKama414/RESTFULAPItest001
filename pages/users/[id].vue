<script setup lang="ts">
// import { getUsers } from '~/server/api/users'
import { apiGetUser, apiGetPosts } from '~/server/api';

const user = ref<any>(null);
const posts = ref<any[]>([]);
const route = useRoute()

async function fetchUser() {
  try {
    const data = await apiGetUser(Number(route.params.id));
    user.value = data;
  } catch (error) {
    console.error(error);
  }
};
fetchUser();

async function fetchPosts() {
  try {
    const data = await apiGetPosts(Number(route.params.id));
    posts.value = data;
  } catch (error) {
    console.error(error);
  }
};
fetchPosts();

</script>

<template>
  <div>
    <h3><NuxtLink to="/">Go back</NuxtLink></h3>
    <h3><NuxtLink v-if="route.params.id != '1'" :to="`/users/${Number(route.params.id) - 1}`">Prev</NuxtLink></h3>
    <h3><NuxtLink v-if="route.params.id != '10'" :to="`/users/${Number(route.params.id) + 1}`">Next</NuxtLink></h3>
    <h1>User Details</h1>
    <p>ID: {{ user?.id }}</p>
    <p>Name: {{ user?.name }}</p>
    <p>Email: {{ user?.email }}</p>
    <p>Username: {{ user?.username }}</p>
    <p>Phone: {{ user?.phone }}</p>
    <p>Website: {{ user?.website }}</p>
    <ul aria-label="Address:">
        <li>{{ user?.address.suite }} {{ user?.address.street }} {{ user?.address.city }}</li>
        <li>Geo: {{ user?.address.geo.lat }}, {{ user?.address.geo.lng }}</li>
        <li>ZipCode: {{ user?.address.zipcode }}</li>
    </ul>
    <ul aria-label="Company:">
        <li>Name: {{ user?.company.name }}</li>
        <li>CatchPhrase: {{ user?.company.catchPhrase }}</li>
        <li>BS: {{ user?.company.bs }}</li>
    </ul>
    <br />
    
    <p>Post:</p>
    <div v-for="post in posts" :key="post.id">
      <h3><NuxtLink :to="`/posts/${post.id}`"> {{ post.title }} </NuxtLink></h3>
      <p>{{ post.body }}</p>
      <br />
    </div>
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