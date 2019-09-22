<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <UsersList />
  </div>
</template>

<script>

import UsersList from "@/components/UsersList";

export default {
  name: 'home',
  components: {
    UsersList
  }
}
</script>
