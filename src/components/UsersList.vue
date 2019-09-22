<template>
    <section>
        <button v-on:click="addUser()">Add user</button>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Phone</th>
                <th>Email</th>
                <th>U</th>
                <th>D</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in USERS" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.surname }}</td>
                <td>{{ user.phone }}</td>
                <td>{{ user.email }}</td>
                <td>
                    <button v-on:click.prevent="editUser(user.id)">Update</button>
                </td>
                <td>
                    <button v-on:click.prevent="deleteUser(user)">Delete</button>
                </td>
            </tr>
            </tbody>
        </table>
    </section>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'UsersList',
    computed: {
      ...mapGetters([ 'USERS' ]),
    },
    methods: {
      addUser() {
        this.$router.push('cu-user');
      },
      editUser(id) {
        this.$router.push(`cu-user/${id}`);
      },
      deleteUser(user) {
        if (confirm('Are you sure you want to delete this item?')) {
          this.$store.dispatch('DELETE_USER', user);
        }
      },
    }
  }
</script>

<style scoped lang="stylus">
    button
        background-color #41b883
        border 1px solid #35495e
        border-radius 5px
        color white
        padding 7px 16px
        text-align center
        text-decoration none
        display inline-block
        font-size 14px
        font-weight bold
        cursor pointer
        transition-duration: 0.3s

    button:hover
        background-color white
        color #41b883

    table
        color #35495e
        width 100%
        margin-top 20px
        border 1px solid black
        border-collapse: collapse;

        th, td
            height 30px
            border 2px solid #35495e

        button
            margin 5px 0 5px 0
</style>
