<template>
    <section class="main-wrapper">
        <article class="form-wrapper">
            <div class="main-form">
                <label for="user-name">Name</label>
                <input type="text" id="user-name" v-model="currentUser.name">
                <label for="user-surname">Surname</label>
                <input type="text" id="user-surname" v-model="currentUser.surname">
                <label for="user-phone">Phone</label>
                <input type="text" id="user-phone" v-model="currentUser.phone">
                <label for="user-email">Email</label>
                <input type="text" id="user-email" v-model="currentUser.email">
                <div class="buttons">
                    <button
                            v-on:click="createUser()"
                            v-if="!(this.$route.params.id)">Create
                    </button>
                    <button
                            v-on:click="updateUser()"
                            v-if="this.$route.params.id">Update
                    </button>
                </div>
            </div>
            <div class="import-form">
                <label for="importJSON">Import JSON</label>
                <textarea name="importJSON" id="importJSON" cols="30" rows="15" v-model="jsonString"></textarea>
                <div class="buttons">
                    <button v-on:click="readTextarea()">Read textarea</button>
                </div>
            </div>
        </article>
    </section>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'CreateUpdateUser',
    data() {
      return {
        currentUser: {},
        jsonString: '',
      }
    },
    created() {
      if (this.$route.params.id) {
        this.currentUser = this.$store.getters.GET_USER_BY_ID(this.$route.params.id);
      }
    },
    methods: {
      ...mapActions([ 'SAVE_USER', 'UPDATE_USER', 'IMPORT_USERS' ]),
      createUser() {
        this.SAVE_USER(this.currentUser);
        this.$router.push('/');
      },
      updateUser() {
        this.UPDATE_USER(Object.assign({}, this.currentUser, { id: this.$route.params.id }));
        this.$router.push('/');
      },
      readTextarea() {
        try {
          const importJson = JSON.parse(this.jsonString);
          this.IMPORT_USERS(importJson);
          this.$router.push('/');
        } catch (e) {
          alert(`Not valid json:
          ${e.message}`);
          console.error(e.message);
        }
      },
    },
  }
</script>

<style scoped lang="stylus">
    input
        padding 7px
        background-color white
        color #35495e
        border 1px solid #35495e
        font-size 16px
        font-weight bold

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

    .main-wrapper
        color #35495e
        height 600px
        margin 0 auto

    .import-form
    .main-form
        width 45%
        display flex
        justify-content space-around
        align-items left
        flex-direction column
        text-align left
        line-height 2

    .form-wrapper
        display flex
        justify-content space-around

    .buttons
        width 100%
        display flex
        flex-direction row
        justify-content center
        margin-top 20px
</style>
