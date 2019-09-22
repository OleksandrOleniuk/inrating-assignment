<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <CreateUpdateUser/>
    </div>
</template>

<script>

  import CreateUpdateUser from "@/components/CreateUpdateUser";

  export default {
    name: 'user',
    components: {
      CreateUpdateUser
    }
  }
</script>
