<script setup lang="ts">
// import { getUsers } from '~/server/api/users'
import { apiGetUsers } from '~/server/api';

const users = ref<any[]>([]);

async function fetchUsers() {
  try {
    const data = await apiGetUsers();
    users.value = data;
  } catch (error) {
    console.error(error);
  }
};

fetchUsers();
</script>

<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <h2><NuxtLink :to="`/users/${user.id}`">{{ user.name }}</NuxtLink></h2>
        <p>{{ user.email }}</p>
        <p>{{ user.phone }}</p>
      </li>
    </ul>
  </div>
</template>